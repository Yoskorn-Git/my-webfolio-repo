import React from 'react';

const Contact = () => {
  return (
    <section className="contact_section bg-gray-100 p-8 flex-row">
      <div className='flex md:flex-row md:items-center justify-center'>
        <div className='text-gray-400 text-3xl header_text mb-4 md:mb-0 md:mr-4 md:text-center'>
          Let’s make your delivery pipeline calmer and faster.
        </div>

        <button onClick={() => window.location = 'mailto:yoskorn.ler@gmail.com'} type="button" className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-orange-700 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
          <svg className="w-6 h-6 sm:w-3.5 sm:h-3.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          <div className='hidden sm:block ml-2'>Start a conversation</div>
        </button>
      </div>

      <div className="flex justify-center space-x-5 mt-5">
        <a href="https://discordapp.com/users/240822066272534528" target="_blank" rel="noopener noreferrer">
          <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/CDCDCD/discord-logo.png" alt="discord-logo" />
        </a>
        <a href="https://www.linkedin.com/in/yoskorn/" target="_blank" rel="noopener noreferrer">
          <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/CDCDCD/linkedin.png" alt="linkedin" />
        </a>
        <a href="https://github.com/Yoskorn-Git" target="_blank" rel="noopener noreferrer">
          <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/CDCDCD/github.png" alt="github" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
