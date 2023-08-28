import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';

import config from '~/config';
import { ExploreIcon, FollowIcon, HomeIcon, LiveIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Menu, { MenuItem } from './Menu/';
import { default as FollowAccounts } from '~/components/ListAccounts';

const cx = classNames.bind(styles);
const currentUser = false;
function Sidebar() {
    return (
        <aside className={`${cx('wrapper')}`}>
            <div className={cx('content')}>
                <Menu>
                    <MenuItem title="Dành cho bạn" to={config.routes.home} icon={HomeIcon} />
                    <MenuItem title="Đang Follow" to={config.routes.following} icon={FollowIcon} />
                    <MenuItem title="Khám phá" to={config.routes.explore} icon={ExploreIcon} />
                    <MenuItem title="LIVE" to={config.routes.live} icon={LiveIcon} />
                </Menu>
                {!currentUser && (
                    <div className={cx('login-container')}>
                        <p className={cx('login-container__desc')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
                        <Button large outline customClasses={cx(`login`)}>
                            Đăng nhập
                        </Button>
                    </div>
                )}
                {currentUser && <FollowAccounts />}
                <div></div>
            </div>
        </aside>
    );
}

export default Sidebar;
