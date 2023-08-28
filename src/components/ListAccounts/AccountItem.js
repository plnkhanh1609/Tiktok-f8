import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '../Images';

import styles from './FollowAccounts.module.scss';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import AccountPreview from './AccountPreview/';
import { Wrapper as PopperWrapper } from '../Popper';

const cx = classNames.bind(styles);
const tick = true;
function AccountItem() {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <div style={{ width: '320px' }}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        </div>
    );
    return (
        <div>
            <Tippy
                offset={[0, 0]}
                zIndex="1000"
                placement="bottom"
                interactive
                render={renderPreview}
                delay={[800, 0]}
            >
                <Link className={`${cx('container')} d-flex center`}>
                    <Image
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3e41ce2a33352c87456b7b01a3d0a25c~c5_100x100.jpeg?x-expires=1687752000&x-signature=MA3dskzCU8GfsLBLD0pWqSnLGlI%3D"
                        alt=""
                    />
                    <div className={`${cx('info')} d-flex`}>
                        <div className={`${cx('name')}`}>
                            <span>powboii</span>
                            {tick && (
                                <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                            )}
                        </div>
                        <span className={cx('username')}>Powboii</span>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

export default AccountItem;
