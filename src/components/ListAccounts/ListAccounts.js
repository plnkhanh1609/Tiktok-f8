import classNames from 'classnames/bind';

import styles from './FollowAccounts.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);
function FollowAccounts() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('label')}>Các tài khoản đang follow</h2>
            <AccountItem />
            <p className={cx('more-btn')}>Xem thêm</p>
        </div>
    );
}

export default FollowAccounts;
