import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    folder: {
        width: "300px",
        height: "400px",
        marginTop: "50px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    },
    data: {
        marginTop: "5px",
        textAlign: 'center',
        height: "340px",
    },
    buttons: {
        marginTop: "10px"
    },
    clicked: {
        cursor: "pointer",
    }, 
    items: {
        marginTop: "15px",
        marginRight: "10px",
        marginLeft: "10px",
        overflowY: "scroll",
        overflowX: "hidden",
        height: "90%",
        '&::-webkit-scrollbar': {
            display: "none"
        }
    },
    flex: {
        display: "flex",
        flexDirection: "column-reverse"
    }
}))