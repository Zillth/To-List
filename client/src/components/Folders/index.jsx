import { Container } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux'
import Folder from './Folder';
import useStyles from './styles'

const Folders = ({ folders }) => {
    const classes = useStyles()
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