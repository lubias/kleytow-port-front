import ScrollButton from '@/components/Atoms/ScrollButton/ScrollButton'
import React from 'react'

function Hero() {
    return (
        <div className="relative h-screen flex flex-col justify-center items-center text-white">
            <img src='/Hero_NEW.png' className='h-screen' />
            <ScrollButton targetId="next-section" />
        </div>
    )
}

export default Hero