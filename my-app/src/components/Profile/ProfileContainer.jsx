import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from './../../redux/profile-reducer'
import {withRouter} from "react-router-dom";
import {Redirect} from "react-router-dom";
import {getUsersProfile} from './../../redux/profile-reducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount = () => {
        let userId = this.props.match.params.userId
        if (!userId){
            userId = '2'
        }
        this.props.getUsersProfile(userId)
    }

    render = () =>{
        if(this.props.isAuth == false) return (
            <Redirect to='/login'/>
            )
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}
const mapStateToProps = (state) =>{
    return{
        profile: state.profilePage.profile,
        isAuth: state.authPage.toggle
    }
}
export default compose(connect(mapStateToProps, {getUsersProfile}),withRouter,withAuthRedirect)(ProfileContainer)