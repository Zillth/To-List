import {makeStyles} from '@material-ui/core'

export default makeStyles(({
    alertContainer: {
        padding: "40px",
        margin: "10px auto",
        textAlign: "center",
        borderRadius: "15px"
    },
    success: {
        backgroundColor: "#5DE71B"
    },
    error: {
        backgroundColor: "#C70039",
        color: "white"
    }
}))