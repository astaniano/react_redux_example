import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css';

const MsgItem = (props) => {
	return <div className={s.message}>{props.msg}</div>;
};

export default MsgItem;
