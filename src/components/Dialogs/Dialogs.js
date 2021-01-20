import DialogItem from './DialogItem/DialogItem';
import MsgItem from './MsgItem/MsgItem';
import s from './Dialogs.module.css';
import {addMsgCreator, updateNewMsgCreator} from "../../redux/messagesReducer";

const Dialogs = (props) => {
    const {dialogs, messages, newMsgBody} = props.messagesPage;

    const dialogsElement = dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id}/>))
    const messagesElement = messages.map((message) => (<MsgItem msg={message.msg}/>))

    const onSendMsgClick = () => {
        props.dispatch(addMsgCreator());
    }

    const onNewMsgChange = (e) => {
        const msgBody = e.target.value;

        props.dispatch(updateNewMsgCreator(msgBody));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <textarea
                            onChange={onNewMsgChange}
                            value={newMsgBody}
                            placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMsgClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
