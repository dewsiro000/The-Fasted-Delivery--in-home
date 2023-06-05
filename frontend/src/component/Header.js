import React from 'react'
import logo from "../assest/logo.png"
import { Link } from 'react-router-dom'
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='fixed shadow-md w-full h-16 px-2 md:px-4 '>

            {/* desktop */}
            <div className='flex items-center h-full'>
                <Link to={""}>
                    <div className='h-12'>
                        <img src={logo} className='h-full' />
                    </div>
                </Link>
            </div>

            <div>
                <nav>

                </nav>
                <div>
                    <FaUserAlt />
                </div>
            </div>

            {/* mobile */}
        </header>
    )
}

export default Header
