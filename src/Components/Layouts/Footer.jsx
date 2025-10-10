import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-white  py-20 ">
      <div className="container mx-auto px-20 lg:px-20 py20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex pt-20">
          <p className="font-bold text-center">
            <Link to="/">
              <img
                src="/Images/Logoo.png"
                alt="Logo"
                className="flex items-center justify-center  text-lg cursor-pointer w-24 "
              />
            </Link>
          </p>
        </div>
        <div className='pt-20'>
          <p>LEGAL</p>
          <div className="flex flex-col text-start mb-4 md:mb-0">
            <Link
              to="/"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Home
            </Link>
            <Link
              to="/recipeDetails"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              About
            </Link>
            <Link
              to=""
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Service
            </Link>
            <Link
              to=""
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Contact
            </Link>
            <Link
              to=""
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Help
            </Link>
          </div>
        </div>
        <div className='pt-20'>
          <p>QUICK LINKS</p>
          <div className="flex flex-col text-start mb-4 md:mb-0">
            <Link
              to="/"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
             Terms and Conditions
            </Link>
            <Link
              to="/recipeDetails"
              className="block md:inline-block py-2 hover:text-gray-500"
            >
             LIcense Agreement
            </Link>
            <Link
              to=""
              className="block md:inline-block py-2 hover:text-gray-500"
            >
             Privacy Policy
            </Link>
            <Link
              to=""
              className="block md:inline-block py-2 hover:text-gray-500"
            >
             Copyright Information
            </Link>
            <Link
              to=""
              className="block md:inline-block py-2 hover:text-gray-500"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
        <div className='flex flex-col pt-20'>
        <p>SOCIAL MEDIA</p>
        <div className='flex mt-4 gap-4'>
          <Link>
          <FaFacebook size={18}/>
          </Link>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
