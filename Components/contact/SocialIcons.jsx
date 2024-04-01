import React from 'react'
import {BsFacebook} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/profile.php?id=61557095551294&mibextid=ZbWKwL' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.linkedin.com/in/fiehaa-mubark-2651a12aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
              target='_blank' className='text-3xl hover:opacity-70' >
              <FaLinkedin/>
              </a> 

     
          
             <a target='_blank' href='mailto:fiehaa19912@gmail.com' className='text-3xl hover:opacity-70'>
              <SiGmail/>
              </a>
          </div>
        )
      }

export default SocialIcons