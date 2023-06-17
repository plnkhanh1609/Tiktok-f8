import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultfn = () => {};
function Menu({ children, data = [], onChange = defaultfn }) {
    const [history, setHistory] = useState([{ data: data }]);
    const items = history[history.length - 1];
    const render = () => {
        return (
            <ul className={cx('see-more-popup')}>
                {items.data.map((item, index) => {
                    const isParent = !!item.children;
                    return (
                        <MenuItem
                            key={index}
                            data={item}
                            onClick={() => {
                                if (isParent) {
                                    setHistory((prev) => [...prev, item.children]);
                                } else if (!item.to && !item.href) {
                                    onChange(item);
                                }
                            }}
                        />
                    );
                })}
            </ul>
        );
    };
    return (
        <Tippy
            hideOnClick="false"
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={`${cx('content')}`} {...attrs}>
                    <PopperWrapper>
                        {history.length > 1 && (
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        {render()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={() => {
                setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
