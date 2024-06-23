import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-white shadow-lg rounded-lg fixed top-8 left-1/2 transform -translate-x-1/2 w-max p-4">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-8 list-none">
                    <li>
                        <NavLink
                            exact
                            to="/"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            activeClassName="active"
                            className="nav-link"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav