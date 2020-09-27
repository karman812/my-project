import React from 'react';
import {Col, Row} from "react-bootstrap";
import styles from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <Col xs='6'>
                <h1>{this.props.fullName}</h1>
                <span>Статус: </span>
                {
                    !this.state.editMode && <div><span className={styles.statusText} onDoubleClick={this.activateEditMode}>{this.props.status}</span></div>
                }
                {
                    this.state.editMode && <div><input autoFocus={true} onBlur={this.deActivateEditMode} type="text" value={this.props.status}/></div>
                }

                {this.props.contacts.twitter && <div><span>Contacts: </span><div><a href={this.props.contacts.twitter}>twitter</a></div></div>}

            </Col>
        )
    }
}

export default ProfileStatus
