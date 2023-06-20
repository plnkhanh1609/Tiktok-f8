import * as requset from '~/utils/httpRequest';

const search = async (api, q, type = 'less') => {
    try {
        const rs = await requset.get(api, {
            params: {
                q,
                type,
            },
        });
        return rs.data;
    } catch (error) {
        console.log(error);
    }
};

export default search;
