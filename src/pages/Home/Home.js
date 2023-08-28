import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { default as HomeVideos } from '~/components/Posts';
import { useEffect, useState } from 'react';
import video from '~/Services/VideoServices';
const cx = classNames.bind(styles);
function Home() {
    const [data, setData] = useState([]);
    const api = 'videos';

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await video(api);
            setData(data.data);
        };
        fetchAPI();
    }, []);

    return <div className={cx('wrapper')}>{data && <HomeVideos data={data} />}</div>;
}

export default Home;
