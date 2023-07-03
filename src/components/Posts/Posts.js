import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Posts.module.scss';
import Image from '~/components/Images';
import Button from '~/components/Button';
import { CommentIcon, HeartIcon, MusicIcon, ShareIcon } from '~/components/Icons';
import Video from '~/components/Video';
const cx = classNames.bind(styles);
function Videos({ data = [] }) {
    return data.map((item) => (
        <div key={item.id} className={cx('wrapper')}>
            <Link to={`user/@${item.user.nickname}`}>
                <Image src={item.user.avatar} avatar width="56px" height="56px" />
            </Link>
            <div className={cx('container')}>
                <Link to={`user/@${item.user.nickname}`} className={`${cx('')} d-flex center`}>
                    <h3 className={cx('nickname')}>{item.user.nickname}</h3>
                    <h4
                        className={cx('username')}
                    >{`${item.user.first_name} ${item.user.last_name}`}</h4>
                </Link>
                <Button customClasses={cx('follow')} center small outline>
                    Follow
                </Button>
                <div className={cx('content')}>
                    <span className={cx('desc')}>{item.description}</span>
                </div>
                <h4 className={cx('video-music')}>
                    <Link className={`${cx('')} d-flex center`}>
                        <MusicIcon />
                        nhạc nền - {item.user.nickname}
                    </Link>
                </h4>
                <div className={`${cx('video')} d-flex`}>
                    <Video data= {item} />
                    <div className={`${cx('video-cta')} d-flex`}>
                        <button className={`${cx('btn')} d-flex`}>
                            <span className={cx('like-icon')}>
                                <HeartIcon />
                            </span>
                            <strong className={cx('like-count')}>{item.likes_count}</strong>
                        </button>
                        <button className={`${cx('btn')} d-flex`}>
                            <span className={cx('comment-icon')}>
                                <CommentIcon />
                            </span>
                            <strong className={cx('comment-count')}>{item.comments_count}</strong>
                        </button>
                        <button className={`${cx('btn')} d-flex`}>
                            <span className={cx('share-icon')}>
                                <ShareIcon />
                            </span>
                            <strong className={cx('share-count')}>{item.shares_count}</strong>
                        </button>
                        <button className={`${cx('btn')} d-flex`}>
                            <span className={cx('share-icon')}>
                                <ShareIcon />
                            </span>
                            <strong className={cx('share-count')}>{item.shares_count}</strong>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ));
}

export default Videos;
