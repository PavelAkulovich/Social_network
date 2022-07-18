import s from './Post.module.css'

const Post = (props) => {
    // props.like = '0'
    return <div>
        <div className={s.item}>---{props.message}</div>
        <div>
            <span>-{props.like} like</span>
        </div>
    </div>



}

export default Post;