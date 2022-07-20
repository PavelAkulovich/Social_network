import s from './ProfileInfo.module.css'

const ProfileInfo = () => {

    return (
        <div>
            <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" alt="123" />
            <div className={s.description}>Ava</div>
        </div>
    )
}

export default ProfileInfo