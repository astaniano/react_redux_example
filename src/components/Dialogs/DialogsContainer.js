import {addMsgCreator, updateNewMsgCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().messagesPage;

    const onSendMsgClick = () => {
        props.store.dispatch(addMsgCreator());
    }

    const onNewMsgChange = (msgBody) => {
        props.store.dispatch(updateNewMsgCreator(msgBody));
    }

    return (
        <Dialogs updateNewMsgBody={onNewMsgChange} sendMsg={onSendMsgClick} messagesPage={state}/>
    );
};

export default DialogsContainer;
