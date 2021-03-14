import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserStatus, savePhoto, setUserProfile, updateUserStatus} from "../../redux/profileReducer";
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

        this.props.setUserProfile(userId);
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

    render() {
        // console.log("render profile")
        return (
            <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log("mapStateToProps profile")
    return {
        profile: state.profilePage.profile,
        userStatus: state.profilePage.userStatus,
        loggedUserId: state.auth.userId,
    }
};

const mapDispatchToProps = {setUserProfile, getUserStatus, updateUserStatus, savePhoto};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)
