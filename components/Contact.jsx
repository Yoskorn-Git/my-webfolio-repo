import React from 'react';

const Contact = () => {
  return (
    <section className="contact_section bg-gray-100 p-8">
      <div className='flex flex-col md:flex-row md:items-center justify-center'>
        <div className='text-gray-400 text-3xl header_text mb-4 md:mb-0 md:mr-4 md:text-center'>
          Need Something? Feel free to contact me.
        </div>

        <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden header_text text-gray-900 rounded-lg group bg-gradient-to-br from-orange-600 to-blue-500 group-hover:from-orange-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
            Contact Me
          </span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
