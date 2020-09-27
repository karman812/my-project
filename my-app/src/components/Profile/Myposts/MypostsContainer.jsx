import React from 'react';

import {addPostActionCreator} from "../../../redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import Myposts from "./Myposts";

import {connect} from "react-redux";

const mapStateToProps = (state) =>{
    return{
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        updateNewPostNext : (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () =>{
            dispatch(addPostActionCreator())
        }
    }
}
let  MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts)
export default MypostsContainer;