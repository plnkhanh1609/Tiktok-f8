import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { CloseIcon, LoadIcon, SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import useDebounce from '../hooks/useDebounce';
import search from '~/Services/searchServices';

const cx = classNames.bind(styles);
function Search() {
    const [value, setValue] = useState('');
    const [load, setLoad] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const inputSearch = useRef();
    const [showResult, setShowResult] = useState(false);
    const debounce = useDebounce(value, 500);
    const API = 'users/search';

    //GEt data search
    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoad(true);

            const data = await search(API, debounce);
            setSearchResult(data.data);

            setLoad(false);
        };
        fetchAPI();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounce]);
    const handleClear = () => {
        inputSearch.current.focus();
        setSearchResult([]);
        setValue('');
    };
    const handleHideReult = () => {
        setShowResult(false);
    };
    const handleChange = (searchValue) => {
        if (!searchValue.startsWith(' ')) {
            setValue(searchValue);
        }
    };
    return (
        <Tippy
            visible={showResult}
            render={(attrs) => (
                <div className={`${cx('search-result')}`} {...attrs}>
                    <h4>Bạn có thể thích</h4>
                    {searchResult && searchResult.length > 0 && (
                        <PopperWrapper>
                            <h4 className={`${cx('search-account__title')}`}>Tài khoản</h4>
                            <AccountItem data={searchResult} />
                        </PopperWrapper>
                    )}
                </div>
            )}
            interactive
            onClickOutside={handleHideReult}
        >
            <div className={`${cx('search')} d-flex center`}>
                <input
                    ref={inputSearch}
                    value={value}
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                    className={``}
                    type="text"
                    spellCheck={false}
                    placeholder={'Tìm kiếm'}
                    onFocus={() => setShowResult(true)}
                />
                {!!value && !load && (
                    <button className={`${cx('close')}`} onClick={handleClear}>
                        <CloseIcon />
                    </button>
                )}
                {load && (
                    <button className={`${cx('spinner')}`}>
                        <LoadIcon />
                    </button>
                )}
                <span className={`${cx('search__split')}`}></span>
                <button
                    className={`${cx('search__icon')} d-flex center`}
                    onMouseDown={(e) => e.preventDefault()}
                >
                    <SearchIcon />
                </button>
            </div>
        </Tippy>
    );
}

export default Search;
