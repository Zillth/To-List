import { Typography, Checkbox } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

const Element = ({ data }) => {
    const classes = useStyles() 
    return (
        <>
            <div className={classes.itemContainer}>
                <Checkbox color="primary"/> <Typography>{data}</Typography>
            </div>
        </>
    );
}

export default Element;