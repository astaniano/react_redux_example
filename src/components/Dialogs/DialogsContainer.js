import {addMsgCreator, updateNewMsgCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().messagesPage;

                    const onSendMsgClick = () => {
                        store.dispatch(addMsgCreator());
                    }

                    const onNewMsgChange = (msgBody) => {
                        store.dispatch(updateNewMsgCreator(msgBody));
                    }

                    return <Dialogs updateNewMsgBody={onNewMsgChange} sendMsg={onSendMsgClick} messagesPage={state}/>
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;
