import classNames from 'classnames/bind';

import styles from './AccountPreview.module.scss';
import Image from '~/components/Images';
import Button from '~/components/Button';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={`${cx('wrapper')}`}>
            <header className={`${cx('header')} d-flex center`}>
                <Link rel="opener" className={`d-flex`}>
                    <Image className={cx('avatar')} src="avcxvxvx" />
                </Link>
                <Button outline center>
                    Follow
                </Button>
            </header>
            <Link className={`d-flex`}>
                <span className={cx('nickname')}>powboii</span>
            </Link>
            <Link className={`d-flex`}>
                <span className={cx('username')}>Powboii</span>
            </Link>
            <p>
                <span className={cx('follower-count')}>1.5M</span>
                <span className={cx('follower')}>Follower</span>
                <span className={cx('like-count')}>94.4M</span>
                <span className={cx('like')}>Thích</span>
            </p>
            <p className={cx('bio')}>Booking: 034.997.1345 (za.lo) App chặn QC và xem Youtube tắt màn hình👇</p>
        </div>
    );
}

export default AccountPreview;
