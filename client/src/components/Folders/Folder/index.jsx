import React, { useEffect, useRef, useState } from 'react'
import { Button, Paper, Typography, TextField, } from '@material-ui/core'
import Element from './Element'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { deleteFolder, updateFolder } from '../../../actions/folder'
import Modal from '../../Modal'

const Folder = ({ data }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const folderTitleRef = useRef()
    const inputTitle = useRef()
    const items = useRef()
    const itemInput = useRef()

    const [modalOpen, setModalOpen] = useState(false)
    const [folderTitle, setFolderTitle] = useState(data.title)
    const [item, setItem] = useState("")
    const [addItem, setAddItem] = useState(false)

    const handleDelete = () => {
        dispatch(deleteFolder(data))
    }

    const handleUpdate = e => {
        e.preventDefault()
        dispatch(updateFolder(data, { title: folderTitle, elements: data.elements }))
    }

    const handleAddItem = e => {
        e.preventDefault()
        dispatch(updateFolder(data, { title: data.title, elements: [...data.elements, item] }))
        setItem("")
    }

    useEffect(() => {
        folderTitleRef.current.addEventListener("click", () => setModalOpen(true))
    }, [folderTitleRef])

    useEffect(() => {
        modalOpen && inputTitle.current.lastChild.lastChild.focus()
    }, [modalOpen])

    useEffect(() => {
        addItem && itemInput.current.lastChild.lastChild.focus()
    }, [addItem])

    return (
        <>
            <Paper elevation={5} className={classes.folder}>
                <div className={classes.data}>
                    <Typography variant="h6" ref={folderTitleRef} className={classes.clicked}>{data.title}</Typography>
                    <div className={classes.items} ref={items}>
                        {addItem && (
                            <form onSubmit={handleAddItem}>
                                <TextField label="item" fullWidth value={item} onChange={e => setItem(e.target.value)} ref={itemInput} />
                            </form>
                        )}
                        <div className={classes.flex}>
                            {data.elements.map(element => (
                                <Element data={element} key={element} />
                            ))}
                        </div>
                    </div>
                </div>
                {addItem ? (
                    <div className={classes.buttons}>
                        <Button onClick={() => setAddItem(false)} fullWidth>Accept</Button>
                    </div>
                ) : (
                    <div className={classes.buttons}>
                        <Button onClick={() => setAddItem(true)} fullWidth={data.elements.length >= 1}>Add</Button>
                        {data.elements.length < 1 && (
                            <Button onClick={handleDelete}>Delete folder</Button>
                        )}
                    </div>
                )}

            </Paper>
            {modalOpen && (
                <Modal>
                    <form onSubmit={handleUpdate}>
                        <TextField label="Title" ref={inputTitle} value={folderTitle} onChange={e => setFolderTitle(e.target.value)} fullWidth />
                        <div className={classes.buttons}>
                            <Button color="primary" className={classes.buttons} type="submit">
                                Accept
                            </Button>
                            <Button onClick={() => setModalOpen(false)} className={classes.buttons}>
                                Cancel
                            </Button>
                        </div>
                    </form>
                </Modal>
            )}
        </>
    );
}

export default Folder;