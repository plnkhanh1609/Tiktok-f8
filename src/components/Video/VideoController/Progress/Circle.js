import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
const cx = classNames.bind(styles);

function Circle({position = false,...props}) {
    return <div style={{...props}} className={cx('circle',position)}></div>;
}

export default Circle;
