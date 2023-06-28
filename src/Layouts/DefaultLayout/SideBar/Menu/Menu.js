import PropTypes from 'prop-types';
import className from 'classnames/bind';
import styles from './Menu.module.scss'
const cx = className.bind(styles)
function Menu({ children }) {
    return <ul className={cx('wrapper')}>{children}</ul>;
}
Menu.propTypes = {
    children: PropTypes.node,
};
export default Menu;
