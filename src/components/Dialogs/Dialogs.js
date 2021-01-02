import DialogItem from './DialogItem/DialogItem';
import MsgItem from './MsgItem/MsgItem';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Vitya' },
		{ id: 2, name: 'Valera' },
	];

	let messages = [
		{ id: 1, msg: 'hahahaha' },
		{ id: 2, msg: 'gogog' },
	];

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
