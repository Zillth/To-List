import { Typography, Checkbox } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Element = ({ data, changeItems }) => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.itemContainer}>
                <Checkbox color="primary" onChange={() => changeItems(data)}/>
                <Typography className={classes.item}>{data}</Typography>
            </div>
        </>
    );
}

export default Element;