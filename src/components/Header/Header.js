import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return (
		<header className={`${s.header}`}>
			<img
				src="https://www.logodesign.net/logo/soccer-ball-with-spreading-wings-and-stars-4606ld.png"
				alt="header background"
			/>

			<div className={s.loginBlock}>
				{props.isAuth
					? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
					: <NavLink to={'/Login'}>Login</NavLink> }
			</div>
		</header>
	);
};

export default Header;