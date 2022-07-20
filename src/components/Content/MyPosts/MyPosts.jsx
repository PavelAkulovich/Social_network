import s from './MyPosts.module.css'
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        <NewPost />
        <Post message='hello!' like='28' />
        <Post message='How are you???' like='4' />
        <Post message='Yappy New Year' like='68' />
        <Post message='hello!' like='28' />
        <Post />
        
    </div>



}

export default MyPosts;