import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formcontrol/formControlls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer.ts";
import {Redirect} from "react-router-dom";
import s from "../common/formcontrol/formControl.module.css"

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} validate={[required]} name={"email"} component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} validate={[required]} name={"password"} component={Input}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
        </div>

        {props.error && <div className={s.formSummaryError}>{props.error}</div>}

        <div>
            <button>Login</button>
        </div>
    </form>;
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {login})(Login);
