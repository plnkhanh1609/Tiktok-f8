import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounde] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounde(value);
        }, delay);
        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounce;
}

export default useDebounce;
