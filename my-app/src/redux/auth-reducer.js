const SET_USER_DATA = 'SET-USER-DATA'


const initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId,email,login) => {
    return {
        type: SET_USER_DATA,
        data: {userId,email,login}
    }
}


export default authReducer