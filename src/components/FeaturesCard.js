import React from 'react';

const FeaturesCard = ({ headingText, paragraphText, imgSrc, className }) => {
    return (
        <div className={'rounded-md flex flex-col items-center lg:items-start p-6 xl:px-8 bg-white max-w-sm md:text-left ' + className}>
            <div className='rounded-full bg-violet w-20 h-20 flex items-center justify-center -mt-16'>
                <img src={imgSrc} alt="icon-brand-recognition.svg" />
            </div>
            <h3 className='text-lg font-bold mt-6'>{headingText}</h3>
            <p className='text-gray-500 my-5'>{paragraphText}</p>
        </div>
    );
}

export default FeaturesCard;