import { forwardRef, useState } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
function Image({ src, alt, className, fallback : customFallback = images.noImage, ...props }, ref) {
    const [fallBack, setFallBack] = useState('');
    const handleImage = () => {
        setFallBack(customFallback);
    };
    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallBack || src}
            alt={alt}
            {...props}
            onError={handleImage}
        />
    );
}

export default forwardRef(Image);
