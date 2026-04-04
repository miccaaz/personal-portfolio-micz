import React from 'react'
import { Github, Linkedin, Dribbble, Mail, MapPin, Heart } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa';
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants'
import { scrollToSection } from '../../hooks/useScrollSpy'
import FadeIn from '../animations/FadeIn'

const Footer = () => {
  
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    whatsapp: FaWhatsapp
  }

  return (
    <footer className=''>
      <div className=''>
        <div className='' />
        <div className='' />
      </div>

      <div className=''>
        <div className=''>
          <FadeIn delay={0}>
            <div>
              <h3 className=''>
                {PERSONAL_INFO.name.split(' ')[0]}
              </h3>
              <p className=''>
                {PERSONAL_INFO.tagline}
              </p>

              <div className=''>
                <a 
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className=''
                >
                  <div className=''>
                    <Mail className='' />
                  </div>
                  <span className=''>
                    {PERSONAL_INFO.email}
                  </span>
                </a>



                
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>
  )
}

export default Footer