import { AppBar, Avatar, Toolbar, Button, TextField } from '@material-ui/core'
import React, { useRef, useState, useEffect } from 'react'
import useStyles from './styles.js'
import { useDispatch } from 'react-redux'
import { setUser } from '../../actions/user'
import Modal from '../Modal/index.jsx'
import CloseIcon from '@material-ui/icons/Close'
import AddIcon from '@material-ui/icons/Add'
import { createFolder } from '../../actions/folder.js'

const Navbar = ({ imageUrl }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const folderInput = useRef()
    const [modalOpen, setModalOpen] = useState(false)
    const [folderTitle, setFolderTitle] = useState("")

    const logout = () => {
        dispatch(setUser())
        localStorage.removeItem('profile')
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(createFolder(folderTitle))
        setFolderTitle("")
        setModalOpen(false)
    }

    useEffect(() => {
        if (modalOpen) {
            folderInput.current?.lastChild?.lastChild?.focus()
        }
    }, [modalOpen])

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
                        <TextField label="Title" value={folderTitle} ref={folderInput} onChange={e => setFolderTitle(e.target.value)} fullWidth />
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