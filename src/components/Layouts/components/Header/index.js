import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'
function Header() {
    const cx = classNames.bind(styles)
    return (
        <header className={`${cx('header')} d-flex center`}>
            <nav className={`${cx('header-wrapper')} d-flex`}>
                <Link to="/">Home</Link>
                <Link to="/following">Following</Link>
                <Link to="/upload">Upload</Link>
            </nav>
        </header>
    );
}

export default Header;
