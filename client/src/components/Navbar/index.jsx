import { AppBar, Avatar, Toolbar, Button } from '@material-ui/core'
import React from 'react'
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'
import { setUser } from '../../actions/user'

const Navbar = ({ imageUrl }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(setUser())
        localStorage.removeItem('profile')
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