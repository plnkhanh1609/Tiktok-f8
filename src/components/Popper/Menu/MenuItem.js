import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

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
MenuItem.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func,
};
export default MenuItem;
