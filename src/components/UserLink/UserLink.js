import React, {useEffect, useState} from 'react';
import s from './UserLink.module.css'
import Post from "../Post/Post";
import {NavLink, useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import input, {setValue} from "../../redux/slices/inputSlice";
import {addFriend, removeFriend} from "../../redux/slices/friendsSlice";
import UserBlock from "../UserBlock/UserBlock";

const UserLink = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState([])
    const [loading, isLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const fetchUser = async () => {
            dispatch(setValue(''))
            const {data} = await axios.get(`https://630b6a73ed18e8251652fc87.mockapi.io/users/${id}`)
            setUser(data)
            isLoading(false)
        }
        fetchUser()


    }, [])


    return (
        <div className={s.root}>
            {loading ? <div>Загрука...</div> : <UserBlock user={user}/>}
        </div>
    );
};





export default UserLink;