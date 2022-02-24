import { Fragment, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./Screens/About"
import CodeId from "./Screens/CodeId"
import Contact from "./Screens/Contact"
import Home from "./Screens/Home"

const fetchCurrTheme = localStorage.getItem('theme')
const App = () => {
    const [theme, setTheme] = useState(fetchCurrTheme === 'dark' ? 'dark' : '')
    const themeHandler = () => {
        let changeThemeColor = theme === 'dark' ? '' : 'dark';
        localStorage.setItem('theme', changeThemeColor)
        setTheme(changeThemeColor)
    }

    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    return (
        <Fragment>
            <Navbar />
            <div className="text-center mt-4 bg-cyan-300 dark:bg-gray-300">
                <button 
                    className="
                        bg-cyan-600 shadow-md px-4 py-2 rounded text-white hover:bg-cyan-700
                        dark:bg-gray-600 dark:hover:bg-gray-800
                    "
                    onClick={themeHandler}
                >{theme === 'dark' ? 'Disable' : 'Enable'} Dark Mode</button>
            </div>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/more/:codeId" element={<CodeId />}></Route>
            </Routes>
        </Fragment>
    )
}

export default App
