import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-10">
            <div className="container mx-auto p-4 flex justify-center items-center">
                <ul className="flex space-x-8 list-none">
                    <li>
                        <Link to="/" className="text-gray-700 font-medium hover:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-700 font-medium hover:text-blue-500">
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
