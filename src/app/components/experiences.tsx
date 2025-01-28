import React from "react";

const Experiences = () => {
    return (
        <div className='bg-blue-200 flex flex-col justify-center content-center text-center py-10 px-5' id='my-experiences'>
            <h2 className='text-3xl text-orange-600 mb-5'>Experiences</h2>
            <div className='md:mx-auto md:w-[70%] lg:w-[60%] xl:w-[55%]'>
                <div className='mb-3'>
                    <p>My experience includes <a className='text-blue-500' href="https://www.w3schools.com/whatis/">developing websites</a> for small businesses, non-profit organizations and personal projects. My strength is the ability to work independently. I am able to design every element of the page from start to finish without a constant supervision, following <a className='text-blue-500' href="https://careerfoundry.com/en/blog/web-development/8-biggest-trends">web industry strends</a>.
                    </p>
                </div>           
                <div className='mb-3'>
                    <p>I hold a bachelor on computer Information systems and network security from <a className='text-blue-500' href="https://www.cie-wc.edu">Cleveland Institute of Electronics</a>. I have the Frontend Developer Career Path certificate from <a className='text-blue-500' href="https://scrimba.com">Scrimba</a>, the Frontend Libraries Path course from <a className='text-blue-500' href="https://www.freecodecamp.org">FreeCodeCamp</a>, and the Frontend Engineer Path course from <a className='text-blue-500' href="https://www.codecademy.com">Codecademy</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;