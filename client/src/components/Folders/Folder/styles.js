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
        marginRight: "10px",
        marginLeft: "10px",
        overflowY: "scroll",
        height: "90%",
    },
    flex: {
        display: "flex",
        flexDirection: "column-reverse"
    }
}))