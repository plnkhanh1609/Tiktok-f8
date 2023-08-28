import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import Image from '../Images';
import { useEffect, useRef } from 'react';
import VideoController from './VideoController/';

const cx = classNames.bind(styles);
function Video({ data, autoplay }) {
    const videoE = useRef();
    useEffect(() => {
        window.addEventListener('load', videoScroll);
        window.addEventListener('scroll', videoScroll);

        function videoScroll() {
            if (document.querySelectorAll('video').length > 0) {
                const windowHeight = window.innerHeight,
                    videoEl = document.querySelectorAll('video');
                for (let i = 0; i < videoEl.length; i++) {
                    let thisVideoEl = videoEl[i],
                        videoHeight = thisVideoEl.clientHeight,
                        videoClientRect = thisVideoEl.getBoundingClientRect().top;
                    console.log('videoClientRect', videoClientRect);
                    if (
                        videoClientRect <= windowHeight - videoHeight * 1 &&
                        videoClientRect >= 0 - videoHeight * 0.1
                    ) {
                        thisVideoEl.play();
                    } else {
                        thisVideoEl.pause();
                    }
                }
            }
        }
        return () => {
            window.removeEventListener('load', videoScroll);
            window.removeEventListener('scroll', videoScroll);
        };
    }, []);
    return (
        <div className={`${cx('wrapper')}`}>
            <Image className={cx('thumb__video')} src={data.thumb_url} alt={data.description} />
            <div className={`${cx('video')}`}>
                <video autoPlay={autoplay} loop id="video" ref={videoE}>
                    <source type="video/mp4" src={data.file_url} alt={data.description} />
                </video>
            </div>
            <div className={`${cx('video-controls')}`}>
                <VideoController data={data} videoE={videoE} />
            </div>
        </div>
    );
}

export default Video;
