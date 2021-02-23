import Button from "./Button"
import React, { useState } from 'react';
import axios from 'axios';
import ShortLinks from "./ShortLinks";

const ShortenField = () => {
    const [ data, setData ] = useState(null);
    const [ url, setUrl ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);
    const [ buttonDisable, setButtonDisable ] = useState(false)

    const fetchRequest = async () => {
        setIsError(false);
        try {
            setButtonDisable(true)
            setIsLoading(false);
            const result = await axios(url);
            setData(result.data)
            setIsLoading(true);
            setButtonDisable(false)
        } catch (error) {
            setButtonDisable(false)
            setIsError(true);
        }
    }

    return (
        <div className='max-w-3xl xl:max-w-6xl mx-auto m-10 lg:mx-auto'>
            <div className='relative z-50 flex flex-col md:flex-row md:items-center  rounded-lg bg-shorten bg-violet p-5 md:p-10 -mt-56 items-start'>
                <input type="text" placeholder='Shorten a Link here!..'
                    className={'md:mr-5 p-3 rounded-lg w-full mb-3 md:mb-0 focus:outline-none focus:ring focus:border-cayn' + (isError ? ' border-2 border-red-500' : '')}
                    onChange={e => setUrl(`https://api.shrtco.de/v2/shorten?url=${e.target.value}`)}
                />

                {isError && <div className='text-red-500 mb-3 md:absolute bottom-0'>Please Add a Link</div>}

                <Button
                    className='rounded-lg w-full sm:w-40 py-3'
                    text='Shorten it!'
                    onClick={fetchRequest}
                    buttonDisable={buttonDisable} />
            </div>
            {isLoading && <ShortLinks data={data} />}

        </div>
    );
}

export default ShortenField;