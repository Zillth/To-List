import { Button, Paper } from '@material-ui/core'
import React from 'react'
import { GoogleLogin } from 'react-google-login'
import GoogleIcon from './GoogleIcon'
import useStyles from './styles'

const Login = () => {
    const classes = useStyles()

    const handleSuccess = result => {
        console.log(result)
    }

    const handleFailure = error => {
        console.log(error)
    }

    return (
        <>
            <Paper className={classes.googleContainer} elevation={3}>
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