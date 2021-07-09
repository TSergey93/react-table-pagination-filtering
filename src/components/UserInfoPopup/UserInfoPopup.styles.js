import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            display: "flex",
            flexDirection: "column",
            maxWidth: 720,
            width: "100%",
            position: "fixed",
            top: "50%",
            left: "50%",
            paddingBottom: 20,
            backgroundColor: "#fff",
            borderRadius: 20,
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            transform: "translate(-49%, -50%)"
        },
        title: {
            margin: "10px auto 15px",
            fontSize: 24
        },
        logo: {
            width: 60,
            height: 60,
            margin: "0 auto",
            objectFit: "cover",
            borderRadius: "50%"
        },
        textWrapper: {
            display: "flex",
            alignItems: "center",
            boxSizing: "border-box",
            width: "100%",
            padding: "15px 20px 5px",
            fontSize: 18,
            color: "#000"
        },
        label: {
            width: 150,
            marginRight: 10
        },
        text: {
            flex: 1,
            width: 250,
            padding: "5px 20px 6px",
            border: "1px solid #000",
            borderRadius: 20
        },
        close: {
            width: 20,
            height: 20,
            position: "absolute",
            top: 10,
            right: 10,
            cursor: "pointer",

            "&::after, &::before": {
                content: `""`,
                width: 20,
                height: 3,
                position: "absolute",
                top: 9,
                left: 0,
                backgroundColor: "#000"
            },

            "&::after": {
                transform: "rotate(45deg)"
            },

            "&::before": {
                transform: "rotate(-45deg)"
            }
        }
    })
);