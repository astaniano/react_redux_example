import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			{/*<div>
				<img className={s.profileImg}
					src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
					alt="f"
				/>
			</div>*/}

			<div className={s.descriptionBlock}>
				<img src={props.profile.Photos.Small} alt=""/>
				ava + description
			</div>

			<ProfileStatusWithHooks userStatus={props.userStatus} updateUserStatus={props.updateUserStatus} match={props.match}/>
		</div>
	);
};

export default ProfileInfo;
