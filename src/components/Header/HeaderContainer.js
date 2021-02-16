import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:8081/auth/me`,).then(res => {
            if (res.data.ResultCode === 0) {
                const {Login: login, Id: userId, Email: email} = res.data.Data;

                this.props.setAuthUserData(userId, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

const mapDispatchToProps = {setAuthUserData};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);