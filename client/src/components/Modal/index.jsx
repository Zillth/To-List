import { Paper } from '@material-ui/core';
import React from 'react'
import useStyles from './styles'

const Modal = ({ children }) => {
    const classes = useStyles()
    return (
        <div className={classes.modal}>
            <Paper className={classes.modalContent} elevation={3}>
                {children}
            </Paper>
        </div>
    );
}

export default Modal;