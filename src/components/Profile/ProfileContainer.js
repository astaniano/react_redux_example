import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile, getUserStatus, updateUserStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1;
        }

        this.props.setUserProfile(userId);
        // setTimeout(() => {
            this.props.getUserStatus(userId);
        // }, 1000)

    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
});

const mapDispatchToProps = {setUserProfile, getUserStatus, updateUserStatus};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(ProfileContainer)
