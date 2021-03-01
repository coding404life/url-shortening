import FeaturesCard from "./FeaturesCard"
import iconBrand from '../../assets/images/icon-brand-recognition.svg';
import detailedRecords from '../../assets/images/icon-detailed-records.svg';
import FullyCustom from '../../assets/images/icon-fully-customizable.svg';
import ShortenField from "../shorten components/ShortenField";
import React from 'react';

const Advanced = () => {
    return (
        <section className='bg-gray-200 px-4 md:px-10 pb-10 pt-32 lg:pb-32 text-center z-0 mt-24'>
            <ShortenField />

            <h1 className='text-3xl font-bold mb-4'>Advanced Statistics</h1>
            <p className='text-gray-500 max-w-md mx-auto'>Track how your links are performing across the web with our advanced statistcs dashboard</p>
            <div className="container mx-auto my-24 flex items-center justify-center flex-col lg:flex-row">
                <FeaturesCard
                    headingText='Brand Recognition'
                    paragraphText={'Boost your brand recognition with each click. Generic links don\'t mean a thing Branded links help instil confidence in your content'}
                    imgSrc={iconBrand}
                    className=''
                />
                <div className='h-3 bg-cayn w-32 xl:w-10 hidden lg:block'></div>
                <div className='h-20 bg-cayn w-2 xl:w-10 lg:hidden'></div>
                <FeaturesCard
                    headingText='Detailed Records'
                    paragraphText='Gain insights into who is clicking your links Knowing when and where people engage with your content helps inform better decisions'
                    imgSrc={detailedRecords}
                    className='relative lg:top-10'
                />
                <div className='h-3 bg-cayn w-32 xl:w-10 hidden lg:block'></div>
                <div className='h-20 bg-cayn w-2 xl:w-10 lg:hidden'></div>
                <FeaturesCard
                    headingText='Fully Customizable'
                    paragraphText='Improve brand awareness and content discoverability through customizable kinks superchanging audience engagement'
                    imgSrc={FullyCustom}
                    className='relative lg:top-20'
                />
            </div>
        </section>
    );
}

export default Advanced;