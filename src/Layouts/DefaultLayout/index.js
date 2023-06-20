import Header from '../components/Header';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'
function DefaultLayout() {
    const cx = classNames.bind(styles)
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={`${cx('container')} d-flex`}>
                <Sidebar />
                <div className={`${cx('content')}`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
