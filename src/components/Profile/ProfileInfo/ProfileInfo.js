import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img className={s.profileImg}
					src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
					alt="f"
				/>
			</div>

			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt=""/>
				ava + description</div>
		</div>
	);
};

export default ProfileInfo;
