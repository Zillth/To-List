import { Button, Paper, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { GoogleLogin } from 'react-google-login'
import Alert from '../Alert'
import GoogleIcon from './GoogleIcon'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { logIn, setUser } from '../../actions/user'

const Login = () => {
    const classes = useStyles()
    const [loginError, setLoginError] = useState(false)
    const dispatch = useDispatch()
    const token = localStorage.getItem('profile')

    useEffect(() => {
        token && dispatch(setUser(token))
    }, [token, dispatch])
    

    const handleSuccess = result => {
        console.log(result)
        dispatch(logIn(result.profileObj))
    }

    const handleFailure = error => {
        error.error !== "popup_closed_by_user" ? setLoginError(true) : setLoginError(false)
    }

    return (
        <>
            {loginError && (
                <Alert text="Something went wrong, Try later!" severity="error" />
            )}

            <Paper className={classes.googleContainer} elevation={3}>
                <div>
                    <img className={classes.image} src="/images/signIn.jpg" alt="Login" />
                    <figcaption>Photo by Artem Podrez from Pexels</figcaption>
                </div>
                <Typography variant="h3" className={classes.title}>Welcome to <i>To-List</i></Typography>
                <GoogleLogin clientId="435050867593-1tim70c70k9gqi27fqv46ucki5ml4u04.apps.googleusercontent.com" render={renderProps => (
                    <Button color="primary" className={classes.googleButton} onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<GoogleIcon />} variant="contained">
                        Sign In with Google
                    </Button>
                )} onSuccess={handleSuccess} onFailure={handleFailure} cookiePolicy="single_host_origin" />
            </Paper>
        </>
    );
}

export default Login;