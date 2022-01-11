import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import About from "./Screens/About"
import Contact from "./Screens/Contact"
import Home from "./Screens/Home"

const App = () => {
    return (
        <Fragment>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </Fragment>
    )
}

export default App
