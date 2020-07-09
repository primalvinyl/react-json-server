import axios from 'axios';
import 'regenerator-runtime/runtime';

const baseURL = 'http://localhost:3000/api';

export const axiosRequest = async (endpoint, type = 'GET', data = null) => {
    const response = await axios({
        method: type,
        baseURL: baseURL,
        url: endpoint,
        data: data
    });
    return await response.data;
};

export const notifications = (response) => {
    if(response.status >= 200 && response.status < 300) console.log('success');
    else console.log('failed');
};