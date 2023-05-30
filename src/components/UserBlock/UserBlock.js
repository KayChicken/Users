import {useDispatch, useSelector} from "react-redux";
import s from "../UserLink/UserLink.module.css";
import {addFriend, removeFriend} from "../../redux/slices/friendsSlice";
import Post from "../Post/Post";
import {NavLink} from "react-router-dom";
import React, {useRef} from "react";

const UserBlock = ({user}) => {
    const dispatch = useDispatch()
    const {friends} = useSelector(state => state.friends)
    console.log(friends.includes(user.id))


    return (



        <>
            <div className={s.userInfo}>
                <img className={s.user_img} src={user.avatar} alt=""/>
                <div>
                    <div className={s.user_fullName}>{user.fullName}</div>
                    <div className={s.user_status}>{user.status}</div>
                </div>
                {friends.includes(user.id) ? <button onClick={() => {dispatch(removeFriend(user.id))}}>Delete</button> : <button onClick={() => {dispatch(addFriend(user.id))}}>Add</button>}


            </div>
            <div className={s.user_blockPosts}>
                <div className={s.main_posts_text}>Посты:</div>
                <div className={s.user_posts}>
                    {user.posts ? user.posts.map((obj) => <Post avatar={user.avatar} text={obj.text}/>) : <div>У пользователя нет постов ;c</div>}

                </div>
            </div>
            <NavLink to="/">

                <svg className={s.backArrow} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="60.731px" height="60.73px" viewBox="0 0 60.731 60.73">
                    <polygon points="0,30.365 29.737,60.105 29.737,42.733 60.731,42.729 60.731,18.001 29.737,17.999 29.737,0.625 		"/>
                </svg>

            </NavLink>
        </>
    )
}

export default UserBlock