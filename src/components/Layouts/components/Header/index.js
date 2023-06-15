import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { default as ToolTip } from '@tippyjs/react';
import { roundArrow } from 'tippy.js';
import 'tippy.js/dist/svg-arrow.css';

import styles from './Header.module.scss';
import img from '~/assets/images';
import Button from '~/components/Button';
import {
    CircleQuestionIcon,
    CoinIcon,
    FavoriteIcon,
    GearIcon,
    KeyBoardIcon,
    LanguageIcon,
    LogoutIcon,
    MessageIcon,
    MoonIcon,
    MoreIcon,
    NotifyIcon,
    PlusIcon,
    UserIcon,
} from '~/components/Icons';
import Image from '~/components/Images';
import { Menu } from '~/components/Popper';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: LanguageIcon,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: CircleQuestionIcon,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: KeyBoardIcon,
        title: 'Phím tắt trên bàn phím',
    },
    {
        icon: MoonIcon,
        title: 'Chế độ tối',
    },
];
const MENU_USER_ITEM = [
    {
        icon: UserIcon,
        title: 'Xem hồ sơ',
        to: '/feedback',
    },
    {
        icon: FavoriteIcon,
        title: 'Yêu thích',
        to: '/feedback',
    },
    {
        icon: CoinIcon,
        title: 'Nhận xu',
        to: '/feedback',
    },
    {
        icon: GearIcon,
        title: 'Cài đặt',
        to: '/feedback',
    },
    ...MENU_ITEM,
    {
        icon: LogoutIcon,
        title: 'Đăng xuất',
        to: '/logout',
    },
];
const handleMenuChange = (menuItem) => {
    console.log(menuItem);
};
const currenUser = true;
function Header() {
    return (
        <header className={`${cx('header')} d-flex center`}>
            <div className={`${cx('wrapper')} d-flex`}>
                <div className={`${cx('logo')} d-flex center`}>
                    <Link className="d-flex" to="/">
                        <img src={img.logo} alt="TikTok" />
                    </Link>
                </div>
                <Search />
                <div className={`${cx('header-cta')} d-flex center`}>
                    <Button
                        to="upload"
                        icon={{
                            position: 'left',
                            icon: PlusIcon,
                        }}
                    >
                        Tải lên
                    </Button>
                    {currenUser ? (
                        <>
                            <ToolTip
                                placement="bottom"
                                arrow={roundArrow}
                                content="Tin nhắn"
                                className={cx('tooltip')}
                            >
                                <button className={cx('action-btn', 'message-icon')}>
                                    <MessageIcon />
                                </button>
                            </ToolTip>
                            <ToolTip
                                content="Hộp thư"
                                placement="bottom"
                                arrow={roundArrow}
                                className={cx('tooltip')}
                            >
                                <button className={cx('action-btn')}>
                                    <NotifyIcon />
                                </button>
                            </ToolTip>
                        </>
                    ) : (
                        <Button primary>Đăng nhập</Button>
                    )}

                    <Menu
                        data={currenUser ? MENU_USER_ITEM : MENU_ITEM}
                        onChange={handleMenuChange}
                        menuUser={currenUser}
                    >
                        {currenUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c71a054853b1b81f432dff5faef87cb5~c5_720x720.jpeg?x-expires=1686286800&x-signature=pXv9OVtQce2eMbJDtIgYuWipEZY%3D"
                                alt=""
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreIcon classname={cx('more-icon')} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
