import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        // console.log("ProfileContainer props below")
        // console.log(this.props)
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1;
        }

        this.props.setUserProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

const mapDispatchToProps = {setUserProfile};

export default connect(mapStateToProps, mapDispatchToProps)(
    withRouter(AuthRedirectComponent)
);
