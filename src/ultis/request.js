import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (api, options = {}) => {
    try {
        const data = await request.get(api, options);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export default request;
