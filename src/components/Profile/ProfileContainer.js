import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, savePhoto, saveProfileInfo, getUserProfile, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    updateProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.loggedUserId;
            // if (!userId) {
            //     this.props.history.push('/dialogs');
            // }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    isOwner() {
        return Number(this.props.match.params.userId) === this.props.loggedUserId;
    }

    render() {
        return (
            <Profile {...this.props} isOwner={this.isOwner()}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        loggedUserId: state.auth.userId,
    }
};

const mapDispatchToProps = {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfileInfo};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)
