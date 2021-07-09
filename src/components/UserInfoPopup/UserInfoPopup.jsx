import React from "react";

import {useStyles} from "./UserInfoPopup.styles";

const UserInfoPopup = ({data, close}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Информация о {`${data.name.title} ${data.name.first} ${data.name.last}`}</h2>
            <img src={data.picture.thumbnail} className={classes.logo}/>
            <div className={classes.textWrapper}>
                <span className={classes.label}>Проживает</span>
                <span className={classes.text}>{`${data.location.country}, ${data.location.city}`}</span>
            </div>
            <div className={classes.textWrapper}>
                <span className={classes.label}>Телефон</span>
                <span className={classes.text}>{data.phone}</span>
            </div>
            <div className={classes.close} onClick={() => close(false)}/>
        </div>
    );
};

export default UserInfoPopup;