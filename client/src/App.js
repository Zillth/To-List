import { Container } from "@material-ui/core";
import Login from "./components/Login";
import React from 'react'
import './app.css'
import { connect } from 'react-redux'
import Navbar from "./components/Navbar"
import Folders from './components/Folders'

function App({ googleId, imageUrl }) {
  return (
    <Container maxWidth="xl" className="container">
      {!googleId ? (
        <Login />
      ) : (
        <>
          <Navbar imageUrl={imageUrl}/>
          <Folders />
        </>
      )}
    </Container>
  );
}

const stateToProps = state => ({ ...state.user })

export default connect(stateToProps)(App);
