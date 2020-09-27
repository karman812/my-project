import React from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "./ProfileInfo.module.css";
import wallper from './../../../assets/images/london.jpg'
import Preloder from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {

    if(!props.props){
        return <Preloder />
    }
    return (

        <Col xs='12'>
            <Row>
            <Col xs='12'>
                <img className={styles.wallper} src={wallper}></img>
            </Col>
            <Col xs='6'>
                <img  className = {styles.userAva} src={props.props.photos.large} alt=""/>
            </Col>
            <ProfileStatus status={props.props.aboutMe} contacts={props.props.contacts} fullName={props.props.fullName}/>
            </Row>
        </Col>

)

}
export default  ProfileInfo