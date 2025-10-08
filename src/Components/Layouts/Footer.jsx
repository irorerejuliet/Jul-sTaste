import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white  py-20 ">
      <div className="container mx-auto px-20 lg:px-20 py20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className='font-bold text-center'>
            <Link to="/">
              <img
                src="/Images/Logoo.png"
                alt="Logo"
                className="flex items-center justify-center  text-lg cursor-pointer w-24 "
              />
            </Link>
          </p>
        </div>
        <div>
          <p>QUICK LINKS</p>
          <div className='flex'>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
