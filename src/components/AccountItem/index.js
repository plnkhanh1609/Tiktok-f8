import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountItem.module.scss';
import Images from '../Images';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function AccountItem({ data = [] }) {
    return (
        <ul className={`${cx('wrapper')}`}>
            {data.map((item, index) => (
                <Link
                    to={`user/@${item.nickname}`}
                    key={index}
                    className={`${cx('account')} d-flex center`}
                >
                    <Images
                        className={cx('avatar')}
                        src={item.avatar}
                        alt={item.username}
                        loading="lazy"
                    />
                    <div className={`${cx('info')} d-flex`}>
                        <h4 className={`${cx('name')}`}>
                            <span>{item.full_name}</span>
                            {item.tick && (
                                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                            )}
                        </h4>
                        <span className={cx('username')}>{item.nickname}</span>
                    </div>
                </Link>
            ))}
        </ul>
    );
}

export default AccountItem;
