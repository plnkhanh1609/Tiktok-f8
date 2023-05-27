import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faCircleXmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import img from '~/assets/images';
function Header() {
    const cx = classNames.bind(styles);
    return (
        <header className={`${cx('header')} d-flex center`}>
            <div className={`${cx('wrapper')} d-flex`}>
                <div className={`${cx('logo')} d-flex center`}>
                    <Link className="d-flex" to="/">
                        <img src={img.logo} alt="TikTok" />
                    </Link>
                </div>

                <div className={`${cx('search')} d-flex center`}>
                    <input className={``} type="text" spellCheck={false} placeholder={'Tìm kiếm'} />
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
                <div className={`${cx('header-cta')} d-flex center`}>
                    <button className={`${cx('')}`}>Tải lên</button>
                    <button className={`${cx('')}`}>Đăng nhập</button>
                    <button className={`${cx('')}`}>Tải lên</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
