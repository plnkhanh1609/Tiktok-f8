import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
const cx = classNames.bind(styles);

function BarProgress({position = false}) {
    return <div className={cx('bar-progress')}></div>;
}

export default BarProgress;
