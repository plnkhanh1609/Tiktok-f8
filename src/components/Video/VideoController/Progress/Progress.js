import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
const cx = classNames.bind(styles);

function Progress({ children, volumeBar = false, videoBar = false  }) {
    return <div className={cx('wrapper',{volumeBar, videoBar})}>{children}</div>;
}

export default Progress;
