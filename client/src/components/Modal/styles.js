import { makeStyles } from '@material-ui/core'

export default makeStyles(theme => ({
    modal: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        margin: "250px auto",
        maxWidth: "300px",
        padding: "15px"
    }
}))