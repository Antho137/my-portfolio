import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div className='relative mt-24 py-10 px-5 bg-blue-200' id='about-me'>
            <div className='text-center'>
                <h2 className='text-3xl text-orange-600 '>About Me</h2>
            </div>
            <div className='md:mx-auto md:w-[70%] lg:w-[60%] xl:w-[50%] text-center flex flex-col justify-center content-center p-5'>
                <Image
                    src='/author.jpg'
                    alt='Author'
                    width={300}
                    height={300}
                    className='mt-3 mb-5 mx-auto rounded-[50%]'
                    priority
                />
                <p><a className='text-blue-500' href="https://blog.hubspot.com/website/website-development">Web Development</a> is one of my passions since I have discovered it years ago. As a constantly changing field, I have been keeping up with the latest from the<a className='text-blue-500' href="https://www.w3.org"> World Wide Web Consortium (W3C)</a> standards and coding recommendations.</p>
                <p>Build interactive website which is meaningful to <a className='text-blue-500' href="https://www.techtarget.com">search engines</a>, has better <a className='text-blue-500' href="https://www.w3.org/WAI/fundamentals/accessibility-intro/">accessibility</a>, and been responsive one is what I care while developing a web project.</p>
            </div>
        </div>
    )
}

export default About;