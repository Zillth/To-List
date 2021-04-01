import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    folder: {
        width: "300px",
        height: "300px",
        marginTop: "50px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column"
    },
    data: {
        marginTop: "5px",
        textAlign: 'center',
        height: "240px",
    },
    buttons: {
        marginTop: "10px"
    },
    clicked: {
        cursor: "pointer",
    }
}))