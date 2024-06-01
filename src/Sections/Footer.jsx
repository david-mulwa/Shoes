import { copyrightSign } from '../assets/icons'
import {footerLogo} from '../assets/images'
import {socialMedia, footerLinks} from '../constants'

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20flx-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} 
            width={150}
            height={46}
            alt="logo"
            />
          </a>

          <p className="mt-6 text-base font-montserrat  leading-7 text-white-700 sm:max-w-sm"> Get Shoes ready for the new term at your nearest Nike store. find your perfect size in store. Get rewards.</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon,) => (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                />
              </div>

            ))}
          </div>

        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          { footerLinks.map((section) => (
            <div key={section}>
              <h4 className='text-white-700 font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>

              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>
                    <a href={link.url} >{link.name}</a>
                  </li>
                ))}
              </ul>

            </div>

          ))}

        </div>

            
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className=' flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
          src={copyrightSign}
          alt='copy right sign'
          width={20}
          height={20}
          className='rounded-full m-0'
          />
          <p> Copyright 2024. All Rights Reserved</p>

        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>

      </div>

    </footer>
  )
}

export default Footer