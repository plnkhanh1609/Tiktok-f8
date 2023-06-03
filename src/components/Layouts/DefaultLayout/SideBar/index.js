import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
import Button from '~/components/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Sidebar() {
    return (
        <aside className={`${cx('wrapper')}`}>
            <h2>SideBar</h2>
            <Button
                outline
                large
                icon={{
                    position: 'left',
                    name: faPlus,
                }}
            >
                Tải lên
            </Button>
        </aside>
    );
}

export default Sidebar;
