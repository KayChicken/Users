import React from 'react';
import s from './Post.module.css'

const Post = ({avatar,text}) => {
    return (
        <div className={s.root}>
            <img className={s.user_posts_image}  src={avatar} alt=""/>
            <h4 className={s.user_posts_text}>{text}</h4>
        </div>
    );
};

export default Post;