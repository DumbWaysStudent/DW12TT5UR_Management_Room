import Axios from 'axios'

import * as types from '../types'

export const handleActionLogin = (username, password) => ({
    type : types.LOGIN,
    payload: Axios({
        method : 'POST',
        url : 'https://192.168.0.23/api/v2/login',
      data: { 
          username : "dianprasetyo" ,
          password : "admin",
        }
    })
})