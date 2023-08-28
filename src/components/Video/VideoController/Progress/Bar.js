import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);
function Bar({ onMouseDown, onDrag, onDragEnd, videoBar = false, ...props }, ref) {
    return (
        <div
            onDragEnd={onDragEnd}
            onDrag={onDrag}
            ref={ref}
            onMouseDown={onMouseDown}
            style={{ ...props }}
            className={cx('bar', { videoBar })}
        ></div>
    );
}

export default forwardRef(Bar);
