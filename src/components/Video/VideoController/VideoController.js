import classNames from 'classnames/bind';

import styles from './VideoController.module.scss';

import { PlayIcon, VolumeIcon } from '~/components/Icons';
import Progress, { Bar, BarProgress, Circle } from './Progress';
import { useState } from 'react';
const cx = classNames.bind(styles);
function VideoController({ videoE }) {
    const [isPlay, setIsPlay] = useState(true);
    return (
        <div className={cx('wrapper')}>
            <div className={`${cx('video-controls__container')} d-flex`}>
                <button
                    className={cx('play-btn')}
                    onClick={() => {
                        setIsPlay((prev) => !prev);
                        videoE.current.play();
                    }}
                >
                    <PlayIcon play={isPlay} />
                </button>
                <div className={`${cx('volumeContainer')} d-flex`}>
                    <div className={`${cx('volume')} d-flex center`}>
                        <Progress volumeBar>
                            <Bar height={'50%'} />
                            <BarProgress />
                            <Circle bottom={'50%'} transform={'translate(-50%,50%)'} />
                        </Progress>
                    </div>
                    <button className={cx('volume-btn')}>
                        <VolumeIcon isMute={isPlay} />
                    </button>
                </div>
            </div>
            <div className={`${cx('progress')} d-flex`}>
                <Progress videoBar>
                    <Bar width="0%" />
                    <BarProgress />
                    <Circle left="100%" transform={'translate(-100%,-50%)'} />
                </Progress>
                <span className={cx('progress__time')}>00:00/00:00</span>
            </div>
        </div>
    );
}

export default VideoController;
