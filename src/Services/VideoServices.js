import * as requset from '~/utils/httpRequest';

const video = async (api, type = 'for-you', page = '1') =>{
    try {
        const rs = await requset.get(api, {
            params: {
                type,
                page
            }
        })
        return rs.data
    } catch (error) {
        console.log(error);
    }
}
export default video