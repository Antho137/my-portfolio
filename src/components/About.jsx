const About = () => {
    return (
        <div className='relative bg-blue-200 mt-24 py-10 px-5 lg:px-20 xl:px-30'>
            <div>
                <h2 className='text-3xl text-center text-orange-600 '>
                    About Me
                </h2>
            </div>
            <div className='flex flex-col justify-center items-center mx-auto p-5 md:px-10 gap-5 lg:px-15 lg:gap-8'>
                <img src='/author.jpg'
                    alt='Author'
                    className='max-w-[100%] mx-auto rounded-full'
                />
                <p className='max-w-120 text-center text-xl md:text-2xl'>
                    Building interactive websites and web-Apps is what I care while designing and developing web projects.
                </p>
            </div>
        </div>
    )
}

export default About;
