import * as types from '../types'
import Axios from 'axios';

export const handleGetCustomers = (token) => ({
    type: types.GET_CUSTOMER,
    payload: Axios({
        method : "GET",
        url : "http://192.168.0.23:5000/api/v2/customers",
        headers : {
            Authorization : token
        }
    })
});

export const handleAddCustomer = (name, identityNumber, phoneNumber, token) => ({
    type: types.ADD_CUSTOMER,
    payload: Axios({
        method : "POST",
        url : "http://192.168.0.23:5000/api/v2/customers",
        headers : {
            Authorization : token
        },
        data : {
            name: name,
            identity_number : identityNumber,
            phone_number : phoneNumber
        },
    })
});

export const handleEditCustomer = (name, identityNumber, phoneNumber, id, token) => ({
    type: types.EDIT_CUSTOMER,
    payload: Axios({
        method : "PATCH",
        url : `http://192.168.0.23:5000/api/v2/customers/${id}`,
        headers : {
            Authorization : token
        },
        data : {
            name: name,
            identity_number : identityNumber,
            phone_number : phoneNumber
        },
    })
});

