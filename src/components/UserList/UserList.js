import React, {useCallback, useEffect, useState} from 'react';
import s from "../../App.module.css";
import Skeleton from "../User/Skeleton/Skeleton";
import User from "../User/User";
import PaginationRounded from "../Pagination/Pagination";
import {useDispatch, useSelector} from "react-redux";

import debounce from "lodash.debounce";
import {setValue} from "../../redux/slices/inputSlice";
import {fetchUsers} from "../../redux/slices/usersSlice";
import {Link, NavLink} from "react-router-dom";

const UserList = () => {



    const dispatch = useDispatch()
    const {users, status} = useSelector(state => state.users)
    const [input, setInput] = useState('')
    const {value} = useSelector(state => state.input)
    const [currentPage,setCurrentPage] = useState(1)

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setValue(str))
        }, 500), []
    )

    const changeInput = (event) => {
        setCurrentPage(1)
        setInput(event.target.value)
        updateSearchValue(event.target.value)


    }



    useEffect(() => {
        dispatch(fetchUsers({
            currentPage,
            str : value}))
    }, [currentPage,value])






    return (
        <div className={s.userBlock}>
            <div className={s.userContainer}>
                <div className={s.inputblock}>
                    <svg className={s.searchIcon} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px" viewBox="0 0 487.95 487.95">
                        <path
                            d="M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z"/>
                    </svg>
                    <input onChange={(e) => {
                        changeInput(e)
                    }} value={input} className={s.userBlock_input} placeholder="Найти пользователя..." type="text"/>
                </div>
                <div className={s.usersList}>
                    {status === 'loading' ? [...Array(5)].map((obj, index) => <Skeleton
                        key={index}/>) : users.length !== 0 ? users.map((obj, index) => <NavLink to={`/friend/${obj.id}`}><User key={index} {...obj}></User></NavLink>) : <div>Пользователь не найден</div>}

                </div>


            </div>

            <PaginationRounded currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
    );
};

export default UserList;