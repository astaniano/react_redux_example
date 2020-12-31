import s from './Header.module.css';

const Header = () => {
	return (
		<header className={`${s.header}`}>
			<img
				src="https://www.logodesign.net/logo/soccer-ball-with-spreading-wings-and-stars-4606ld.png"
				alt="o\j"
			/>
		</header>
	);
};

export default Header;