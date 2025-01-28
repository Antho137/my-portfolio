import React from 'react';
import { FaGithub, FaFacebook, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {

    return (
        <div className='bg-blue-200 text-center py-10 px-5'>
            <h2 className='text-3xl text-orange-600'>Contact</h2>
            <div className='flex-col justify-center content-center p-5'>
                <p className='flex justify-center content-center'>
                    <FaEnvelope className='mr-3' size={25} /><a href="mailto:antoniosala7@gmail.com">antoniosala7@gmail.com</a>
                </p>
                <div className='flex justify-center content-center gap-3 mt-5' id='my-contact'>
                    <a href="https://github.com/Antho137">
					    <FaGithub className='fas' size={25} />
					</a>
					<a href="https://www.linkedin.com/in/antonio-sala-antho-b85636256">
					    <FaLinkedinIn className='fas' size={25} />
					</a>
					<a href="https://www.facebook.com/antonio.sala.5623">
					    <FaFacebook className='fas' size={25} />
					</a>
					<a href="https://wa.me/244923506453">
					    <FaWhatsapp className='fas' size={25} />
					</a>
                </div>   
            </div>   
        </div>
    );
}

export default Contact