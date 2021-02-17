import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className='p-6 flex items-center justify-between font-poppins'>
            <div className='flex justify-between'>
                <Link className='text-2xl md:text-3xl font-bold' to='/'>Shortly</Link>
                {/* lists */}
                <ul className='hidden items-center lg:flex ml-10 text-gray-500'>
                    <Link to='Features' className='ml-8'>Features</Link>
                    <Link to='Pricing' className='ml-8'>Pricing</Link>
                    <Link to='Recources' className='ml-8'>Recources</Link>
                </ul>
            </div>
            <div className='hidden lg:block'>
                <button className='mr-8 text-gray-500'>Login</button>
                <button className='rounded-full py-2 px-6 bg-cayn text-white'>Sign Up</button>
            </div>
            <svg className='w-6 h-6 lg:hidden cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </nav>
    );
}

export default Navbar;