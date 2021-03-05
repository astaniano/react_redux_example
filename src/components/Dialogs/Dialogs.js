import DialogItem from './DialogItem/DialogItem';
import MsgItem from './MsgItem/MsgItem';
import s from './Dialogs.module.css';
import React from "react";
import {Field, reduxForm} from "redux-form";

const AddMsgForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component="textarea" name="newMsgBody" placeholder="Enter your message" />
        </div>
        <div>
            <button>send</button>
        </div>
    </form>
};

const AddMsgReduxForm = reduxForm({form: 'dialogAddMsgForm'})(AddMsgForm)

const Dialogs = (props) => {
    const dialogsElement = props.messagesPage.dialogs.map((dialog) => (
        <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>))
    const messagesElement = props.messagesPage.messages.map((message) => (<MsgItem msg={message.msg} key={message.id}/>))

    const addNewMSg = (formData) => {
        props.sendMsg(formData.newMsgBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <AddMsgReduxForm onSubmit={addNewMSg}/>
            </div>
        </div>
    );
};

export default Dialogs;
