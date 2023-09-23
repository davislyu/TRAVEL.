import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Main from './components/Main/Main.jsx'



const App = () => {
    const [price, setPrice] = useState(1000)
    return (
        <>
            <Navbar />
            <Home price={price} setPrice={setPrice} />
            <Main price={price} />
            <Footer />

        </>
    )
}

export default App