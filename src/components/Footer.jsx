
const Footer = () => {
  const date = new Date();

  return (
    <div className="bg-gradient-to-r from-orange-600 to-blue-600 text-center py-7">
      <p className='text-orange-300'>
        <span className="text-white text-lg ml-1 block">
          &copy; {date.getFullYear()}&#160; Antonio  N. Sala
        </span> 
        &#160;All rights reserved
      </p> 
    </div>
  );
}

export default Footer;