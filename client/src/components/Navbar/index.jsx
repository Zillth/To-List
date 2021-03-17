import { AppBar, Avatar, Toolbar, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles.js'

const Navbar = ({ imageUrl }) => {
    const classes = useStyles()

    const logout = () => {

    }

    return (
        <>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.create}>
                        Create folder
                    </Button>
                    <Button onClick={logout} className={classes.logout}>
                        <Avatar alt="profile_picture" src={imageUrl} className={classes.avatar} />Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;