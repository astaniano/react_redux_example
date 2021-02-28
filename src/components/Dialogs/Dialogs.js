import DialogItem from './DialogItem/DialogItem';
import MsgItem from './MsgItem/MsgItem';
import s from './Dialogs.module.css';
import React from "react";
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    const state = props.messagesPage;

    const dialogsElement = state.dialogs.map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>))
    const messagesElement = state.messages.map((message) => (<MsgItem msg={message.msg} key={message.id}/>))
    const newMsgBody = state.newMsgBody;

    const onSendMsgClick = () => {
        props.sendMsg();
    }

    const onNewMsgChange = (e) => {
        const msgBody = e.target.value;
        props.updateNewMsgBody(msgBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

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
