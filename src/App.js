import React from 'react'
import "./app.css"
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'



const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Main />
            {/* <Footer /> */}

        </>
    )
}

export default App