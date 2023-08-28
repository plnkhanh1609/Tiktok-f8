import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

function Circle({ position = false, onMouseDown, onDragStart, ...props }, ref) {
    return (
        <div
            onMouseDown={onMouseDown}
            onDragStart={onDragStart}
            ref={ref}
            style={{ ...props }}
            className={cx('circle', position)}
        ></div>
    );
}

export default forwardRef(Circle);
