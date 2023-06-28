import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { default as HomeVideos } from '~/components/Posts';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Home() {
    const [data, setData] = useState([])
    const api = 'https://tiktok.fullstack.edu.vn/api/videos?type=for-you&page=1';
    useEffect(() => {
        fetch(api)
            .then(rs => rs.json())
            .then(data => setData(data.data))
    },[]);
    console.log(data);
    return (
        <div className={cx('wrapper')}>
            <HomeVideos data={data} />
        </div>
    );
}

export default Home;
