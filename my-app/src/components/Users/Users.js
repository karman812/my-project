import React from "react";
import styles from "./users.module.css";
import {NavLink} from "react-router-dom";
import nagiev from './../../assets/images/nagievjpg.jpg'
import {Container, Col, Row} from "react-bootstrap";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <Row>
            <Col xs = '9'>
                <Row>
                    <Col xs='12'>
                        {pages.map(el => {
                            return <span className={props.currentPage === el && styles.selectedPage} onClick={(event) => {props.onPageChanged(el);}}>{el}</span>
                        })}
                    </Col>
                </Row>


                {
                    props.users.map(el =>
                        <Row className={styles.userCard}>
                            <Col key={el.id} className={styles.usersCards}>
                                <Row>
                                    <Col xs='3'>
                                        <NavLink to={'/profile' + '/' + el.id}>
                                            <img src={el.photos.small != null ? el.photos.small : nagiev} alt="" className={styles.userPhoto}/>
                                        </NavLink>
                                    </Col>
                                    <Col xs='9'>
                                        <Row>
                                            <Col xs='12'>{el.name}</Col>
                                            <Col xs='12'>{el.status}</Col>
                                            <Col xs='12'>{"el.location.city"}</Col>
                                            <Col xs='12'>{"el.location.country"}</Col>
                                        </Row>

                                    </Col>

                                    <Col className={styles.followButtonCol}>{el.followed ? <button onClick={() => {props.unfollow(el.id)}}>Followed</button> : <button onClick={() => {props.follow(el.id)}}>Unfollowed</button>}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )
                }
            </Col>
        </Row>
    )
}
export default Users