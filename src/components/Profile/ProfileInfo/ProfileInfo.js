import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
// import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, isOwner, userStatus, updateUserStatus, match, savePhoto, saveProfileInfo}) => {

    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfileInfo(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.small || userPhoto} className={s.mainPhoto} alt=""/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
            </div>

            {editMode
                ? <ProfileDataForm initialValues={profile} onSubmit={onSubmit} profile={profile}/>
                : <ProfileData activateEditMode={() => {
                    setEditMode(true)
                }} profile={profile} isOwner={isOwner}/>}

            <ProfileStatusWithHooks userStatus={userStatus} updateUserStatus={updateUserStatus} match={match}/>
        </div>
    );
};

const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={activateEditMode}>edit</button>
        </div>}
        <div>
            <b>Full name</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {
            profile.LookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>About me</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map((key) => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;
