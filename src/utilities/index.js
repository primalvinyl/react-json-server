import axios from 'axios';

const baseURL = 'http://localhost:3000/api';

export const axiosRequest = (endpoint, type = 'GET', data = null) => {
    return axios({
        method: type,
        baseURL: baseURL,
        url: endpoint,
        data: data
    });
};

export const notifications = (response) => {
    if(response.status >= 200 && response.status < 300) console.log('success');
    else console.log('failed');
};