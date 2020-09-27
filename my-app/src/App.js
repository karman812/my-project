import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.nodule.css';
import Navbar from './components/Navbar/Navbar';
import {Col, Row, Container} from 'react-bootstrap';
import Route from "react-router-dom/es/Route";
import {BrowserRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <Container fluid className={styles.appWrapper}>
                <HeaderContainer/>
                <Row className='main-row'>
                    <Navbar/>
                    <Col xs='7' className="content">
                        <Route path='/profile/:userId?'  render={() => <ProfileContainer />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                        <Route path='/users'  render={() => <UsersContainer/>}/>
                        <Route path='/login'  render={() => <Login/>}/>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}
export default App;

