import Button from "../Button"
import React, { useRef, useState } from 'react';

const ShortLinks = ({ data }) => {
    const [ copySuccess, setCopySuccess ] = useState('Copy');
    const [ copyColor, setCopyColor ] = useState(false)
    const shortedLink = useRef(null);

    const copyCodeToClipboard = () => {
        shortedLink.current.select();
        document.execCommand('copy');
        setCopySuccess('Copied!');
        setCopyColor(true)
    }

    return (
        <div className='my-5 py-4 px-4 bg-white flex flex-col md:flex-row rounded-md md:items-center   justify-between text-left'>
            <h6>{data.result.original_link}</h6>
            <hr className='text-black h-1 w-full sm:hidden my-3' />
            <div className='flex md:items-center flex-col md:flex-row '>
                <input
                    readOnly
                    className='text-cayn w-52 outline-none focus:outline-none'
                    value={data.result.full_short_link3}
                    ref={shortedLink} />
                {/* {data.result.full_short_link3} */}

                <Button
                    text={copySuccess}
                    className={`mt-4 md:mt-0 md:ml-5 md:w-24 rounded-md w-full ${copyColor ? 'md:bg-indigo-900 md:hover:bg-indigo-700' : ''}`}
                    onClick={copyCodeToClipboard}
                />
            </div>
        </div>
    );
}

export default ShortLinks;