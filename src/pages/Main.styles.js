import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            width: "100vw",
            minHeight: "calc(100vh - 100px)",
            padding: "25px 50px"
        }
    })
);