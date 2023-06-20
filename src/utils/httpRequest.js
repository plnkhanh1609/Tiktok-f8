import axios from 'axios';
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
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
