import {addMsgCreator, updateNewMsgCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
