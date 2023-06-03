import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';

const cx = classNames.bind(styles);

function Menu({ children, data = [] }) {
    const render = () => {
        return (
            <ul className={cx('see-more-popup')}>
                {data.map((item, index) => (
                    <MenuItem key={index} data={item} />
                ))}
            </ul>
        );
    };
    return (
        <Tippy
            render={(attrs) => (
                <div className={`${cx('content')}`} {...attrs}>
                    <PopperWrapper>{render()}</PopperWrapper>
                </div>
            )}
            delay={[0,500]}
            interactive
            placement="bottom-end"
        >
            {children}
        </Tippy>
    );
}

export default Menu;
