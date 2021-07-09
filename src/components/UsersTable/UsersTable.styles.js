import {createStyles, makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(() =>
    createStyles({
        wrapper: {
            minWidth: 720
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",

            "& tr": {
                borderBottom: "1px solid #111"
            },

            "& tbody tr:nth-of-type(even)": {
                backgroundColor: "#f5f6f7"
            },

            "& tfoot tr": {
                border: "none"
            },

            "& tr > td:nth-of-type(2), & tr > td:nth-of-type(4)": {
                textAlign: "center"
            },

            "& th, & td": {
                padding: 10,
                //border: "1px solid #111"
            }
        },
        filterText: {
            width: "100%",
            boxSizing: "border-box",
            marginTop: 5,
            padding: 5,
            border: "2px solid rgba(99, 175, 105, 0.5)",
            borderRadius: 10,
            outline: "none",

            "&:focus": {
                borderColor: "#63af69"
            }
        },
        selectGender: {
            width: "100%",
            boxSizing: "border-box",
            marginTop: 5,
            padding: 5,
            borderRadius: "10px 10px 0 0",
            outline: "none"
        },
        cellName: {
            position: "relative"
        },
        row: {
            cursor: "pointer"
        },
        btn: {
            display: "inline-block",
            maxWidth: 65,
            width: "100%",
            position: "absolute",
            top: 7,
            right: 10,
            padding: "1px 0 3px",
            fontSize: 14,
            color: "#fff",
            textAlign: "center",
            backgroundColor: "#f8f32b",
            border: "none",
            borderRadius: 20,
            outline: "none",
            transition: "background-color 0.1s linear",
            cursor: "pointer",

            "&:hover, &:active": {
                backgroundColor: "#fad201"
            }
        },
        delUser: {
            display: "inline-block",
            padding: 5,
            textAlign: "center",
            border: "1px solid #111",
            borderRadius: 20,
            cursor: "pointer"
        },
        usersNotFound: {
            textAlign: "center"
        }
    })
);