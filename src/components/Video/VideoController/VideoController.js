import classNames from 'classnames/bind';

import styles from './VideoController.module.scss';

import { PlayIcon, VolumeIcon } from '~/components/Icons';
import Progress, { Bar, BarProgress, Circle } from './Progress';
import { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);
function VideoController({ videoE, data }) {
    const [isPlay, setIsPlay] = useState(false);
    const [isMute, setIsMute] = useState(true);
    const [progress, setProgress] = useState('');
    const [volume, setVolume] = useState(0);
    const [preVolume, setprevVolume] = useState(100);
    const progressE = useRef();
    const volumeE = useRef();
    const [progressTime, setProgressTime] = useState('00:00');
    useEffect(() => {
        const video = videoE.current;
        const timeUpdate = (e) => {
            const percentageprogress = Math.floor((e.target.currentTime / e.target.duration) * 100);
            setProgress(percentageprogress + '%');
            setProgressTime(formatTime(video.currentTime));
        };

        videoE.current.addEventListener('timeupdate', timeUpdate);
        return () => video.removeEventListener('timeupdate', timeUpdate);
    }, []);
    useEffect(() => {
        videoE.current.onplay = () => {
            setIsPlay(true);
        };
        videoE.current.onpause = () => {
            setIsPlay(false);
        };
    }, []);
    //volumeChange
    useEffect(() => {
        const videoRef = videoE.current;
        videoE.current.volume = volume / 100;
        const videoEl = document.querySelectorAll('video');
        for (let i = 0; i < videoEl.length; i++) {
            videoEl[i].volume = volume / 100;
            setVolume(videoE.current.volume * 100);
        }
        const onVolumeChange = (e) => {
            const newVolume = e.target.volume;
            setVolume(newVolume * 100);
            setIsMute(newVolume === 0 ? true : false);
        };
        videoRef.addEventListener('volumechange', onVolumeChange);
        return () => {
            videoRef.removeEventListener('volumechange', onVolumeChange);
        };
    }, [volume]);
   
    const HandlePlay = () => {
        if (isPlay) {
            videoE.current.pause();
        } else {
            videoE.current.play();
        }
    };
    const handleMute = () => {
        if (isMute) {
            setIsMute(false);
            setVolume(preVolume);
            videoE.current.volume = preVolume / 100;
        } else {
            setIsMute(true);
            setprevVolume(volume);
            setVolume(0);
            videoE.current.volume = 0;
        }
    };
    const handleProgress = (event) => {
        event.preventDefault(); // prevent selection start (browser action)
        let shiftX = event.clientX - progressE.current.getBoundingClientRect().left;
        const percentageprogress = (shiftX / progressE.current.offsetWidth) * 100;
        videoE.current.currentTime = (percentageprogress * videoE.current.duration) / 100;

        // shiftY not needed, the thumb moves only horizontally
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        function onMouseMove(event) {
            let newLeft = event.clientX - progressE.current.getBoundingClientRect().left;
            if (newLeft < 0) {
                newLeft = 0;
            }
            let rightEdge = progressE.current.offsetWidth;
            if (newLeft > rightEdge) {
                newLeft = rightEdge;
            }
            const percentageprogress = (newLeft / progressE.current.offsetWidth) * 100;
            videoE.current.currentTime = (percentageprogress * videoE.current.duration) / 100;
        }
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };
    const handleVolume = (event) => {
        event.preventDefault(); // prevent selection start (browser action)
        let shiftY = Math.floor(volumeE.current.getBoundingClientRect().bottom) - event.clientY;

        const percentageVolume = Math.floor((shiftY / volumeE.current.offsetHeight) * 100);
        videoE.current.volume = percentageVolume / 100;
        setIsMute(percentageVolume === 0);

        setVolume(percentageVolume);
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        function onMouseMove(event) {
            let newBottom = volumeE.current.getBoundingClientRect().bottom - event.clientY;

            if (newBottom < 0) {
                newBottom = 0;
            }
            let rightEdge = volumeE.current.offsetHeight;
            if (newBottom > rightEdge) {
                newBottom = rightEdge;
            }
            const percentageVolume = Math.floor((newBottom / volumeE.current.offsetHeight) * 100);
            videoE.current.volume = percentageVolume / 100;

            setIsMute(percentageVolume === 0);
            setVolume(percentageVolume);
        }
        function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
        }
    };
    const formatTime = (seconds) => {
        let minutes = Math.floor(seconds / 60);
        minutes = minutes >= 10 ? minutes : '0' + minutes;
        seconds = Math.floor(seconds % 60);
        seconds = seconds >= 10 ? seconds : '0' + seconds;
        return minutes + ':' + seconds;
    };
    return (
        <div className={cx('wrapper')}>
            <div className={`${cx('video-controls__container')} d-flex`}>
                <button className={cx('play-btn')} onClick={HandlePlay}>
                    <PlayIcon play={isPlay} />
                </button>
                <div className={`${cx('volumeContainer')} d-flex`}>
                    <div className={`${cx('volume')} d-flex center`}>
                        <Progress ref={volumeE} onMouseDown={handleVolume} volumeBar>
                            <Bar height={`${volume}%`} />
                            <BarProgress />
                            <Circle
                                bottom={`${volume}%`}
                                transform={`translate(-50%,${volume}%)`}
                            />
                        </Progress>
                    </div>
                    <button onClick={handleMute} className={cx('volume-btn')}>
                        <VolumeIcon isMute={isMute} />
                    </button>
                </div>
            </div>
            <div className={`${cx('progress')} d-flex center`}>
                <Progress onMouseDown={handleProgress} ref={progressE} videoBar>
                    <Circle
                        onDragStart={() => false}
                        left={progress}
                        transform={`translate(-${progress},-50%)`}
                    />
                    <BarProgress />
                    <Bar width={progress} />
                </Progress>
                <span className={cx('progress__time')}>
                    {progressTime}/{data.meta.playtime_string}
                </span>
            </div>
        </div>
    );
}

export default VideoController;
