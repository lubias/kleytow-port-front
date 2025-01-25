import { faLinkedin, faArtstation, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function NavbarSocial() {
    return (
        <nav className='flex gap-7'>
            <a className='cursor-pointer text-primary hover:text-secondary'><FontAwesomeIcon icon={faArtstation} className='w-6 h-6' /></a>
            <a className='cursor-pointer text-primary hover:text-secondary'><FontAwesomeIcon icon={faLinkedin} className='w-6 h-6' /></a>
            <a className='cursor-pointer text-primary hover:text-secondary'><FontAwesomeIcon icon={faInstagram} className='w-6 h-6' /></a>
        </nav>
    )
}

export default NavbarSocial