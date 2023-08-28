import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
import { forwardRef } from 'react';
const cx = classNames.bind(styles);

function Progress({ children, volumeBar = false, videoBar = false, onDragStart, ...props }, ref) {
    return (
        <div
            onDragStart={onDragStart}
            ref={ref}
            {...props}
            className={cx('wrapper', { volumeBar, videoBar })}
        >
            {children}
        </div>
    );
}

export default forwardRef(Progress);
