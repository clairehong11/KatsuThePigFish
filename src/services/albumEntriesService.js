import axios from 'axios';

const api = axios.create({
    baseURL: 'https://katsu-the-pig-fish-app.herokuapp.com/api'
});

const getAlbumEntriesByPage = (pageIndex, pageSize) => api.get(`/albumEntries?page=${pageIndex}&size=${pageSize}`).then(response => response.data);

export {
    getAlbumEntriesByPage
}