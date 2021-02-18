import { Link } from 'react-router-dom';
import { useState } from 'react';
import Dropdown from '../Dropdown';

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <nav className='p-6 flex items-center justify-between container mx-auto'>
                <div className='flex justify-between'>
                    <Link className='text-2xl md:text-3xl font-bold' to='/'>Shortly</Link>
                    {/* links */}
                    <ul className='hidden items-center lg:flex ml-10 text-gray-500 space-x-7'>
                        <Link to='/'>Home</Link>
                        <Link to='/Features'>Features</Link>
                        <Link to='/Pricing'>Pricing</Link>
                        <Link to='/Recources'>Recources</Link>
                    </ul>
                </div>
                <div className='hidden lg:block'>
                    <button className='mr-8 text-gray-500'>Login</button>
                    <button className='rounded-full py-2 px-6 bg-cayn text-white'>Sign Up</button>
                </div>
                <svg onClick={toggle} className='w-6 h-6 lg:hidden cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </nav>
            <Dropdown isOpen={isOpen} toggle={toggle} />
        </header>
    );
}


export default Navbar;