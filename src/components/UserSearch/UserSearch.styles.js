import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            display: "flex",
            alignItems: "center",
            marginBottom: 15
        },
        label: {
            marginRight: 10,
            fontSize: 18,
            color: "#000"
        },
        search: {
            width: 20,
            padding: 4,
            fontSize: 18,
            color: "#000",
            textAlign: "center",
            backgroundColor: "#fff",
            border: "1px solid rgba(99, 175, 105, 0.5)",
            borderRadius: 10,
            outline: "none",
            MozAppearance: "textfield",

            "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                WebkitAppearance: "none",
                margin: 0
            },

            "&:focus": {
                borderColor: "#63af69"
            }
        },
        arrow: {
            display: "inline-block",
            margin: "0 10px"
        },
        btn: {
            maxWidth: 190,
            width: "100%",
            padding: "9px 0 10px",
            fontSize: 18,
            color: "#fff",
            textAlign: "center",
            backgroundColor: "#63af69",
            border: "none",
            borderRadius: 30,
            outline: "none",
            transition: "background-color 0.1s linear",
            cursor: "pointer",

            "&:hover, &:active": {
                backgroundColor: "#64af4b"
            }
        }
    })
);