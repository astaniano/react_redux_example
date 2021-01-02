import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	return (
		<div className={s.dialog}>
			<NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
		</div>
	);
};

const MsgItem = (props) => {
	return <div className={s.message}>{props.msg}</div>;
};

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
