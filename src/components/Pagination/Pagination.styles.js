import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        paginationWrapper: {
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 720,

            "& button[class*='selected']": {
                border: "1px solid ##63af69"
            }
        },
        paginationItemsWrapper: {
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 0,
            padding: 0,
            listStyle: "none",

            "& > li": {
                margin: "0 5px",
                padding: "0 10px",
                fontSize: 14,
                color: "#000",
                cursor: "pointer",

                "&.active": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: 25,
                    border: "1px solid #63af69",
                    borderRadius: "50%",
                    cursor: "default"
                }
            }
        }
    })
);