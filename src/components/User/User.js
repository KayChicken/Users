import React from 'react';
import s from './User.module.css'

const User = ({fullName,avatar,email}) => {
    return (
        <div className={s.root}>
            <img className={s.user_img} src={avatar} alt=""/>
            <div>
                <div className={s.user_fullName}>{fullName}</div>
                <div className={s.user_email}>{email}</div>
            </div>
        </div>
    );
};

export default User;