import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <ul className={`${cx('wrapper')}`}>
            <li className={`${cx('')} d-flex center`}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1662211012058113~c5_300x300.webp?x-expires=1685754000&x-signature=ptxHy2ISTVWHGNjlSnznfL4te5w%3D"
                alt="username"
                loading="lazy"
            />
            <div className={`${cx('info')} d-flex`}>
                <h4 className={`${cx('name')}`}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
            </li>
        </ul>
    );
}

export default AccountItem;
