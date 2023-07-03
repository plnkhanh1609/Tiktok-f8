import classNames from 'classnames/bind';

import styles from './Video.module.scss';
import Image from '../Images';
import { useRef, useState } from 'react';
import VideoController from './VideoController/';

const cx = classNames.bind(styles);
function Video({ data }) {
    const video = useRef();

    return (
        <div className={`${cx('wrapper')}`}>
            <Image className={cx('thumb__video')} src={data.thumb_url} alt={data.description} />
            <div className={`${cx('video')}`}>
                <video id="video" ref={video}>
                    <source type="video/mp4" src={data.file_url} alt={data.description} />
                </video>
            </div>
            <div className={`${cx('video-controls')}`}>
                <VideoController videoE={video} />
            </div>
        </div>
    );
}

export default Video;
