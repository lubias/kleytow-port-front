
import NavbarSocial from '@/components/Molecule/NavbarSocial/NavbarSocial'
import React from 'react'

function Header() {
    return (
        <div className='bg-primary/50 flex z-10 w-full px-20 py-3 overflow-hidden items-center duration-300 hover:bg-primary justify-between text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow whitespace-pre group absolute top-0 gap-2 transition-all ease-out'>
            <span className='absolute right-0 -mt-12 h-40 w-8 translate-x-12 rotate-12 bg-secondary opacity-20 transition-all duration-1000 ease-out group-hover:-translate-x-3/4'></span>
            <div className='flex gap-10 items-center'>
                <img src='/white_logo.svg' alt='Logo' className='w-10' />
                <nav className='text-white space-x-5 text-lg '>
                    <a className='hover:text-secondary cursor-pointer'>Home</a>
                    <a className='hover:text-secondary cursor-pointer'>About</a>
                    <a className='hover:text-secondary cursor-pointer'>Portfolio</a>
                    <a className='hover:text-secondary cursor-pointer'>Blog</a>
                </nav>
            </div>
            <NavbarSocial />
        </div>
    )
}

export default Header