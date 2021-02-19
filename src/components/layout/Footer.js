import { Link } from 'react-router-dom';
import instgramIcon from '../../assets/images/icon-instagram.svg';
import facebookIcon from '../../assets/images/icon-facebook.svg';
import painterestIcon from '../../assets/images/icon-pinterest.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';

const Footer = () => {
    return (
        <footer className='grid grid-flow-row md:grid-flow-col justify-around items-baseline text-white bg-dark-violet p-10 text-center'>
            <div className='md:col-span-3 mb-5'>
                <Link className='text-2xl md:text-3xl font-bold' to='/'>Shortly</Link>
            </div>
            <div className='m-5 text-sm leading-6 font-light text-gray-400'>
                <h5 className='text-lg font-bold text-white mb-3'>Features</h5>
                <p>Link Shortening</p>
                <p>Branded Link</p>
                <p>Analytics</p>
            </div>
            <div className='m-5 text-sm leading-6 font-light text-gray-400'>
                <h5 className='text-lg font-bold text-white mb-3' >Resources</h5>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div className='m-5 text-sm leading-6 font-light text-gray-400'>
                <h5 className='text-lg font-bold text-white mb-3'>Company</h5>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <div className='m-5 flex items-baseline space-x-4'>
                <img src={facebookIcon} alt="icon-instagram.svg" className='h-5 w-5' />
                <img src={twitterIcon} alt="icon-instagram.svg" className='h-5 w-5' />
                <img src={painterestIcon} alt="icon-instagram.svg" className='h-5 w-5' />
                <img src={instgramIcon} alt="icon-instagram.svg" className='h-5 w-5' />
            </div>
        </footer>
    );
}

export default Footer;