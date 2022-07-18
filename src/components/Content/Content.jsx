import s from'./Content.module.css'
import MyPosts from './MyPosts/MyPosts';

const Content = () => {
    return <div className={s.content}>
        <img src="https://klike.net/uploads/posts/2019-05/1556708032_1.jpg" alt="123" />
        <div>Ava</div>
        <MyPosts />
    </div>
}

export default Content;