import { Container } from '@material-ui/core';
import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { getFoldersUser } from '../../actions/folder';
import Folder from './Folder';
import useStyles from './styles'

const Folders = ({ folders }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    useState(() => {
        dispatch(getFoldersUser())
    }, [])

    return (
        <>
            <Container maxWidth="xl" className={classes.container}>
                {folders.map(folder => (
                    <Folder data={folder} key={folder.title}/>
                ))}
            </Container>

        </>
    );
}

const stateToProps = state => ({ ...state })

export default connect(stateToProps)(Folders);