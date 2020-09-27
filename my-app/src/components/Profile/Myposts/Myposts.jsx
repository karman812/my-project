import React from 'react';
import {Col, Row} from 'react-bootstrap';
import styles from "./Myposts.module.css"
import Post from './Post/Post'
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const Myposts = (props) => {

    let postsElements = props.posts.map(el => {
        return (
            <Post message={el.message} likesCount={el.likesCount}/>
        )
    })

    let newElementPost = React.createRef()

    let onAddPost = () => {

        props.addPost()
        // props.dispatch(addPostActionCreator())
    }
    let onPostChange = () => {
        let text = newElementPost.current.value;
        props.updateNewPostNext(text)
    }
    return (
        <Col xs='12'>
            <Row>
                <Col xs='12' className={styles.NewPostCol}>
                    <textarea ref={newElementPost} value={props.newPostText} onChange={onPostChange}></textarea>
                    <button onClick={onAddPost}>Add post</button>
                </Col>
            </Row>
            {postsElements}
        </Col>
    );
}
export default Myposts;