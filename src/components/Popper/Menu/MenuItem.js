import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function MenuItem({ data }) {
    return (
        <li className={`${cx('item')}`}>
            <Button
                text
                customClasses={cx('btn')}
                icon={{
                    position: 'left',
                    name: data.icon,
                }}
            >
                {data.title}
            </Button>
        </li>
    );
}

export default MenuItem;
