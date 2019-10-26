import * as types from './../types'

const initialState = {
    isLoading : true,
    register: []
};

export default function reducerRegister(state = initialState, action) {
    switch (action.type) {
        case `${types.REGISTER}_PENDING`:
            return {
                ...state,
                isLoading : true
            };

        case `${types.REGISTER}_FULFILLED`:
            return {
                ...state,
                isLoading : false,
                register: action.payload.data
            };

        case `${types.REGISTER}_REJECTED`:
            return {
                ...state,
            };
        default:
            return state;
    }
}