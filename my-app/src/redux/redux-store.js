import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import userReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import registerReducer from "./register-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebar:sidebarReducer,
    usersPage: userReducer,
    authPage: authReducer,
    signInPage: registerReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))
window.store = store;
export default store