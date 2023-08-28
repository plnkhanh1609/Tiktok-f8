import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

function BarProgress({ onDrag, onMouseDown, onDragEnd }, ref) {
    return (
        <div
            onDragEnd={onDragEnd}
            onDrag={onDrag}
            ref={ref}
            onMouseDown={onMouseDown}
            className={cx('bar-progress')}
        ></div>
    );
}

export default forwardRef(BarProgress);
