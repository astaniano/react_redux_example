import {addMsgCreator, updateNewMsgCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMsgBody: (msgBody) => {
            dispatch(updateNewMsgCreator(msgBody));
        },
        sendMsg: () => {
            dispatch(addMsgCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(Dialogs));

export default DialogsContainer;
