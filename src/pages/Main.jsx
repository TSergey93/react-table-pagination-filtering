import React, {useState} from "react";

import {useSelector} from "react-redux";

import UsersTable from "../components/UsersTable/UsersTable";
import UserInfoPopup from "../components/UserInfoPopup/UserInfoPopup";
import {useStyles} from "./Main.styles";

const Main = () => {
    const classes = useStyles();

    const [userInfo, setUserInfo] = useState(false);

    const users = useSelector(
        state => state.users.users
    );

    return (
        <div className={classes.wrapper}>
            <UsersTable usersBasic={users} setUserInfo={setUserInfo}/>
            {(userInfo) ? <UserInfoPopup data={userInfo} close={setUserInfo}/> : null}
        </div>
    );
};

export default Main;