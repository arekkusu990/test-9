import axios from 'axios';

export const getBookList = (httpConfig = {}) => {
    let url = "https://my-json-server.typicode.com/MaieuticalLabs/booklists/books";
    return axios.get(url, httpConfig);
};