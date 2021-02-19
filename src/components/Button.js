const Button = ({ text, className }) => {
    return <button className={'bg-cayn px-2 py-3 text-white w-40 focus:outline-none focus:ring focus:border-blue-300 ' + className}>{text}</button>
}

export default Button;