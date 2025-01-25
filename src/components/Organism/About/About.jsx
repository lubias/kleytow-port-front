import React from 'react'

function About() {
    return (
        <div id='next-section' className='bg-secondary/20 px-20 py-10'>
            <div className="max-w-[1920px] mx-auto px-4">
                <div className='mb-20'>
                    <h1 className='text-3xl text-secondary mb-4'>
                        About
                    </h1>
                    <p>
                        Hello everyone! My name is Cleiton Moreira, a 3D artist from Brazil but currently living in Portugal.
                        I'm passionate about everything related to game development and love keeping up to date with the latest practices in the industry.
                        I am a motivated and passionate 3D artist, developing quality models, with 3 years of experience in 3D modeling.
                        I have a degree in Game Design from the Polytechnic Institute of Bragança in Portugal.
                        I studied art design concepts, character models, hard surface models, as well as having a good knowledge of texturing and shading techniques.
                        Lately I've been focusing on becoming a character artist, and I've been taking courses with artists who have worked on big titles such as God of War Ragnarök.
                        I've been working and trying to learn constantly, to help improve my artistic skills so that I can reach my next goals and challenges.
                    </p>
                </div>
                <div className='flex justify-between mb-10'>
                    <div>
                        <h1 className='text-3xl text-secondary mb-4'>
                            Skills
                        </h1>
                        <div>
                            <p>Game Design</p>
                            <p>Digital Sculpting</p>
                            <p>3D Modeling</p>
                            <p>Character Modeling</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-3xl text-secondary mb-4'>
                            Softwares
                        </h1>
                        <div className='flex gap-20'>
                            <div>
                                <p>Maya</p>
                                <p>Unreal Engine</p>
                                <p>Blender</p>
                                <p>Substance 3D Painter</p>
                            </div>
                            <div>
                                <p>TopGun</p>
                                <p>ZBrush</p>
                                <p>Photoshop</p>
                                <p>Marmoset Toolbag</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About