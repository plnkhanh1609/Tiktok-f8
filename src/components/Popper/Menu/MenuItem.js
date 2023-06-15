import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';
import React from 'react';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <li className={cx('item')}>
            <Button
                onClick={onClick}
                to={data.to}
                text
                customClasses={cx('btn')}
                icon={{
                    position: 'left',
                    icon: data.icon,
                }}
            >
                {data.title}
            </Button>
        </li>
    );
}

export default MenuItem;
