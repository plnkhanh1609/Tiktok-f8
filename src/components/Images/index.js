import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { forwardRef, useState } from 'react';

import images from '~/assets/images';
import styles from './Image.module.scss';
const cx = classNames.bind(styles);
const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: customFallback = images.noImage,
            avatar = false,
            ...props
        },
        ref
    ) => {
        const [fallBack, setFallBack] = useState('');
        const handleImage = () => {
            setFallBack(customFallback);
        };
        return (
            <img
                ref={ref}
                className={cx('wrapper',className, {  avatar })}
                src={fallBack || src}
                alt={alt}
                {...props}
                onError={handleImage}
            />
        );
    }
);
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
