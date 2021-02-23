import { ImSpinner9 } from "react-icons/im";
import React from 'react';
const Button = ({ text, className, onClick, buttonDisable }) => {

    return <button
        className={'bg-cayn px-2 py-3 text-white outline-none focus:outline-none focus:bg-light-cayn  hover:bg-light-cayn flex disabled:opacity-80 justify-center ' + className}
        onClick={onClick}
        disabled={buttonDisable}
    >
        {buttonDisable && <span className='flex items-center' ><ImSpinner9 className='animate-spin mr-3' /> <span>{text}</span> </span>}
        {!buttonDisable && <span>{text}</span>}
    </button>
}

export default Button;