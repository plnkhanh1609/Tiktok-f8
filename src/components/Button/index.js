import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    const classes = cx('wrapper', {
        [customClasses]: customClasses,
        text,
        primary,
        rounded,
        outline,
        small,
        large,
        disable,
    });
    return (
        <Comp className={classes} {...props}>
            {icon && icon.position == 'left' ? (
                <FontAwesomeIcon className={cx(icon.position)} icon={icon.name} />
            ) : (
                ''
            )}
            {children}
            {icon && icon.position == 'right' ? (
                <FontAwesomeIcon className={cx(icon.position)} icon={icon.name} />
            ) : (
                ''
            )}
        </Comp>
    );
}

export default Button;
