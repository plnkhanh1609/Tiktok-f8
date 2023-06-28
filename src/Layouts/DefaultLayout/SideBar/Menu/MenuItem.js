import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon }) {
    const { pathname } = useLocation();
    const Icon = icon;

    return (
        <li>
            <NavLink
                to={to}
                className={(nav) => `${cx('item', { active: nav.isActive })} d-flex center`}
            >
                {<Icon icon={!!(to === pathname)} />}
                <span className={`${cx('title')}`}>{title}</span>
            </NavLink>
        </li>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.func,
};
export default MenuItem;
