import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div
            className={isOpen ? "grid text-center bg-violet text-white p-5 mx-10 rounded space-y-6 lg:hidden" : 'hidden'}
            onClick={toggle}
        >
            <Link to='/'>Home</Link>
            <Link to='/Features'>Features</Link>
            <Link to='/Pricing'>Pricing</Link>
            <Link to='/Recources'>Recources</Link>
            <hr className='text-gray-300 my-5' />
            <div className='flex flex-col items-center'>
                <button className='text-white mb-4'>Login</button>
                <button className='rounded-full py-2 px-6 bg-cayn text-white w-full sm:w-auto'>Sign Up</button>
            </div>
        </div>
    );
}

export default Dropdown;