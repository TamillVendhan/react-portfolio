import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from "react-icons/hi";
const SocialLinks = () => {

const Links = [
  {
    id: 1,
    child:(
      <>
            LinkedIn <FaLinkedin size={30}/> 
            </>
    ),
    href: 'https://linkedin.com/in/tamilvendhan-murugesan',
    style: 'rounded-tr-md'
  },
  {
    id: 2,
    child:(
      <>
            GitHub <FaGithub size={30}/> 
            </>
    ),
    href: 'https://github.com/TamillVendhan',
  },
  {
    id: 3,
    child:(
      <>
            Mail <HiOutlineMail size={30}/> 
            </>
    ),
    href: 'mailto:tamilvendhanmurugesan789@gmail.com',

  },
  
]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {Links.map(({id, child, href, style, download}) => (


        <li key={id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 + " " + {style}'>
          <a href={href} className='flex items-center justify-between w-full text-white'
          download={download} 
          target='_blank'
          rel='noreferrer'>
            {child}
            </a>
          </li>
        ))}
        </ul>
        
    </div>
  )
}

export default SocialLinks