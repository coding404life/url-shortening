import bgShorter from '../assets/images/illustration-working.svg';
import Button from './Button';
import React from 'react';
import FocusContext from '../context/context';

const Hero = () => {
    return (
        <section className="grid md:grid-cols-2 p-5 mt-14 container mx-auto">
            <div className='space-y-6 flex justify-center flex-col items-center lg:items-start text-center lg:text-left'>
                <h1 className='text-4xl lg:text-6xl xl:text-7xl font-bold'>More than just shorter links</h1>
                <p className='text-gray-500 text-lg md:text-xl max-w-xl'>building your brand recognition and get detailed insights on how your links are performed</p>

                <FocusContext.Consumer>
                    {(context) => <Button text='Getting Started'
                        className='rounded-full animate-bounce mt-10  w-40 py-3'
                        onClick={context.clickHandler}
                    />}
                </FocusContext.Consumer>

            </div>
            <div className='mt-10 lg:mt-0 relative xl:left-36'>
                <img src={bgShorter} alt="illustration-working.svg" />
            </div>
        </section>
    );
}

export default Hero;