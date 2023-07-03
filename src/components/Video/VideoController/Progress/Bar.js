import classNames from 'classnames/bind';

import styles from './Progress.module.scss';
const cx = classNames.bind(styles);
function Bar({videoBar = false,...props}) {
    return <div style={{...props}} className={cx('bar',{videoBar})}></div>;
}

export default Bar;
