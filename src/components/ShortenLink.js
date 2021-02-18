import Button from "./Button"

const ShortenLink = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center m-10 lg:mx-auto rounded-lg  max-w-3xl xl:max-w-6xl bg-shorten bg-violet p-5 md:p-10'>
            <input type="text" placeholder='Shorten a Link here!..' className='md:mr-5 p-3 rounded-lg w-full mb-3 md:mb-0' />
            <Button className='rounded-lg w-full sm:w-40' text='Shorten it!' />
        </div>
    );
}

export default ShortenLink;