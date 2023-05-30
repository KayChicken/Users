import s from './App.module.css'
import UserList from "./components/UserList/UserList";
import UserLink from "./components/UserLink/UserLink";
import {Routes,Route} from "react-router-dom";


function App() {


    return (
        <div className={s.root}>
            <Routes>
                <Route path="/" element={<UserList/>}></Route>
                <Route path="/friend/:id" element={<UserLink/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
