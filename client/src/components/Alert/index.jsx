import useStyles from './styles'
import React from 'react'

const Alert = ({ text, severity }) => {
    const classes = useStyles()
    let type
    switch (severity) {
        case "error":
            type = classes.error
            break;
        default:
            type = classes.success
            break;
    }

    return (
        <>
            <div className={`${classes.alertContainer} ${type}`}>
                {text}
            </div>
        </>
    );
}

export default Alert;