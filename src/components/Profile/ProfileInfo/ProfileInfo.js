import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = ({profile, isOwner, userStatus, updateUserStatus, match, savePhoto}) => {

	if (!profile) {
		return <Preloader />
	}

	const onMainPhotoSelected = (e) => {
		if (e.target.files.length > 0) {
			savePhoto(e.target.files[0])
		}
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.Photos.Small || userPhoto} className={s.mainPhoto} alt=""/>
				{isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
			</div>

			<ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus} match={match}/>
		</div>
	);
};

export default ProfileInfo;
