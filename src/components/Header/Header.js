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
				{props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink> }
			</div>
		</header>
	);
};

export default Header;