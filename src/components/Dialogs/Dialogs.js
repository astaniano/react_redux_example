import DialogItem from './DialogItem/DialogItem';
import MsgItem from './MsgItem/MsgItem';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	let { dialogs, messages } = props.state;

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				{dialogs.map((dialog) => (
					<DialogItem name={dialog.name} id={dialog.id} />
				))}
			</div>
			<div className={s.messages}>
				{messages.map((message) => (
					<MsgItem msg={message.msg} />
				))}
			</div>
		</div>
	);
};

export default Dialogs;
