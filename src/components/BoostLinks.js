import Button from './Button';
import React from 'react';

const BoostLinks = () => {
    return (
        <section className='bg-violet p-5 py-12 text-center bg-shorten justify-center flex flex-col items-center'>
            <h1 className='text-white text-2xl md:text-4xl mb-7 font-bold'>Boost your Links today</h1>
            <Button text='Get Started' className='rounded-full w-32' />
        </section>
    );
}

export default BoostLinks;