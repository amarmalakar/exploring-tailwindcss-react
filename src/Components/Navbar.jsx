import { Fragment, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isSubMenu, setIsSubMenu] = useState(false);
    const mobSubMenuHandler = () => setIsSubMenu(isSubMenu ? false : true)

    const links = [
        {url: '/about', text: 'About'},
        {url: '/contact', text: 'Contact'},
        {url: '/more/1', text: 'More'},
    ]

    return (
        <Fragment>
            {/* large nav */}
            <nav className="hidden md:block bg-cyan-600 w-full font-serif dark:bg-gray-600">
                <div className="w-full xl:w-10/12 p-2 m-auto flex flex-row justify-between items-center">
                    <Link to="/" className="text-xl font-semibold text-white ease-linear duration-150 hover:text-gray-900">Brand</Link>
                    <ul className="flex flex-row space-x-4 text-white">
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <Link to={link.url} className="hover:text-gray-900">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* small nav */}
            <nav className="md:hidden block bg-cyan-600 w-full font-serif dark:bg-gray-600">
                <div className="w-full p-2 flex flex-row justify-between items-center">
                    <Link to="/" className="text-xl font-semibold text-white ease-linear duration-150 hover:text-gray-900">Brand</Link>
                    <button onClick={mobSubMenuHandler} className="bg-cyan-500 shadow-md px-2 py-1 rounded text-white hover:bg-cyan-700 active:animate-ping dark:bg-gray-700 dark:hover:bg-gray-800">{isSubMenu ? 'Hide' : 'Show'}</button>
                </div>
                {isSubMenu && <ul className="text-white bg-cyan-700 dark:bg-gray-700">
                    {links.map((link, idx) => (
                        <li className="hover:bg-cyan-900 hover:cursor-pointer dark:hover:bg-gray-900" key={idx}>
                            <Link to={link.url} className="block p-2">
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>}
            </nav>
        </Fragment>
    )
}

export default Navbar
