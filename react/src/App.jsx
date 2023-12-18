import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Home from './components/Home/Home';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar />
            <Home />
            <Main />
        </>

    )
}

export default App
