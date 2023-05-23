import Header from './Header';
import Sidebar from './SideBar';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
    console.log('Re-render');
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
