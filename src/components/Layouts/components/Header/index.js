import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleNotch,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faMoon,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import img from '~/assets/images';
import { Menu, Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);


const MENU_ITEM = [
    {
        icon : faEarthAsia,
        title : 'Tiếng Việt'
    },
    {
        icon : faCircleQuestion,
        title : 'Phản hồi và trợ giúp'
    },
    {
        icon : faKeyboard,
        title : 'Phím tắt trên bàn phím'
    },
    {
        icon : faMoon,
        title : 'Chế độ tối'
    },
]
function Header() {
    return (
        <header className={`${cx('header')} d-flex center`}>
            <div className={`${cx('wrapper')} d-flex`}>
                <div className={`${cx('logo')} d-flex center`}>
                    <Link className="d-flex" to="/">
                        <img src={img.logo} alt="TikTok" />
                    </Link>
                </div>
                <Tippy
                    render={(attrs) => (
                        <div className={`${cx('search-result')}`} {...attrs}>
                            <PopperWrapper>
                                <h4 className={`${cx('search-account__title')}`}>Tài khoản</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    visible
                    interactive
                >
                    <div className={`${cx('search')} d-flex center`}>
                        <input
                            className={``}
                            type="text"
                            spellCheck={false}
                            placeholder={'Tìm kiếm'}
                        />
                        <button className={`${cx('close')}`}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={`${cx('spinner')}`}>
                            <FontAwesomeIcon icon={faCircleNotch} />
                        </button>
                        <span className={`${cx('search__split')}`}></span>
                        <button className={`${cx('search__icon')}`}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={`${cx('header-cta')} d-flex center`}>
                    <Button
                        icon={{
                            position: 'left',
                            name: faPlus,
                        }}
                    >
                        Tải lên
                    </Button>
                    <Button primary>Đăng nhập</Button>
                    <Menu data= {MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon
                                className={cx('more-icon')}
                                icon={faEllipsisVertical}
                            />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
