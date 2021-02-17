import bgShorter from '../assets/images/illustration-working.svg';
const Hero = () => {
    return (
        <section className="grid lg:grid-cols-2 gap-4 p-5 ">
            <div className='space-y-4'>
                <h1 className='text-3xl lg:text-6xl'>More than just shorter links</h1>
                <p>building your brand recognition and get detailed insights on how your links are performed</p>
            </div>
            <div>
                <img src={bgShorter} alt="illustration-working.svg" />
            </div>
        </section>
    );
}

export default Hero;