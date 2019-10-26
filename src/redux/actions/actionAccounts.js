import * as types from "../types"
import axios from 'axios'

export const handleRegister = (params) => ({
    type : types.REGISTER,
    payload : axios({
        method : 'POST',
        url : 'https://webtoons-rest-api.herokuapp.com/api/v1/register',
        data: {
            name : params.name,
            email : params.email, 
            password : params.password
        }
    })
});