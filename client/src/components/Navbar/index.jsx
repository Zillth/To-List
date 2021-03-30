import { AppBar, Avatar, Toolbar, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'
import { setUser } from '../../actions/user'
import Modal from '../Modal/index.jsx'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'

const Navbar = ({ imageUrl }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false)
    const [folderName, setFolderName] = useState("")

    const logout = () => {
        dispatch(setUser())
        localStorage.removeItem('profile')
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert(folderName)
        setFolderName("")
        setModalOpen(false)
    }

    return (
        <>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Button className={classes.create} onClick={() => setModalOpen(true)}>
                        Create folder
                    </Button>
                    <Button onClick={logout} className={classes.logout}>
                        <Avatar alt="profile_picture" src={imageUrl} className={classes.avatar} />Logout
                    </Button>
                </Toolbar>
            </AppBar>
            {modalOpen && (
                <Modal>

                    <form className={classes.formContainer} onSubmit={handleSubmit}>
                        <TextField label="Name" id="folder_name" value={folderName} onChange={e => setFolderName(e.target.value)} fullWidth />
                        <div className={classes.btnContainer}>
                            <Button color="primary" className={classes.addIcon} type="submit">
                                <AddIcon />Add
                            </Button>
                            <Button onClick={() => setModalOpen(false)} className={classes.addIcon}>
                                <CloseIcon />Cancel
                            </Button>
                        </div>

                    </form>
                </Modal>
            )}

        </>
    );
}

export default Navbar;