import React from 'react';
import styles from "./Profile.module.css";
import {Col, Row} from 'react-bootstrap';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MypostsContainer from "./Myposts/MypostsContainer";


const Profile = (props) => {

    return (
        <Row>
            <ProfileInfo props={props.profile}/>
            <MypostsContainer />
        </Row>
    )
}
export default Profile;


