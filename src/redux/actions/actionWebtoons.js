import * as types from '../types'
import Axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const handleGetWebtoons = () => ({
    type: types.GET_WEBTOONS,
    payload: Axios.get('https://webtoons-rest-api.herokuapp.com/api/v1/webtoon')
});

export const handleGetDetailWebtoons = (id) => ({
    type: types.GET_DETAIL_WEBTOONS,
    payload: Axios.get(`https://webtoons-rest-api.herokuapp.com/api/v1/webtoon/${id}/episodes`)
});

export const handleGetDetailEpisodes = (id) => ({
    type: types.GET_DETAIL_EPISODES,
    payload: Axios.get(`https://webtoons-rest-api.herokuapp.com/api/v1/webtoon/1/episode/${id}`)
});

export const handleGetFavorites = (token) => ({
    type: types.GET_FAVORITES,
    payload: Axios({
        method: 'get',
        url: `https://webtoons-rest-api.herokuapp.com/api/v1/favorite/8?isFavorite=true`,
        headers: {
            Authorization: token
        }
    })
});

// console.log(handleGetDetailWebtoons)
// console.log(handleGetFavorites)