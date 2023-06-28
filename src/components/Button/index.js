import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    customClasses = false,
    text = false,
    outline = false,
    rounded = false,
    primary = false,
    small = false,
    large = false,
    disable = false,
    center = false,
    to,
    href,
    onClick,
    icon = false,
    children,
    ...passprops
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops,
    };
    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', 'd-flex', {
        [customClasses]: customClasses,
        text,
        primary,
        rounded,
        outline,
        center,
        small,
        large,
        disable,
    });
    const { icon: Icon, position } = icon;
    return (
        <Comp className={classes} {...props}>
            {Icon && position === 'left' ? <Icon classname={cx(position)} /> : ''}
            {children}
            {Icon && position === 'right' ? <Icon classname={cx(position)} /> : ''}
        </Comp>
    );
}

Button.propTypes = {
    customClasses: PropTypes.string,
    text: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    primary: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    disable: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    icon: PropTypes.object,
    children: PropTypes.node.isRequired,
};

export default Button;
