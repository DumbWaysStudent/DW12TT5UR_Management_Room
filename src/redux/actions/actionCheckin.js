import * as types from '../types'
import Axios from 'axios';
import { Header } from 'react-native/Libraries/NewAppScreen';

export const handleGetCheckin = () => ({
    type: types.GET_CHECKIN,
    payload: Axios.get('http://192.168.0.23:5000/api/v2/checkin')
});