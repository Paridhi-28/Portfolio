"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion"

import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-8 place-self-center text-center sm:text-left justify-self-start' >
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#EEBD89] to-[#D13ABD]'>Hello, I am{" "}</span>
                        <br></br>

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Paridhi Agarwal',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Web Developer',
                                1000,
                                'UI / UX Designer',
                                1000,
                                'Python Enthusiast',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />


                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        I am a BTech student and web developer specializing in full-stack development with a strong passion for Python and UI/UX design. I create functional and visually appealing web applications, leveraging my skills in ReactJS and the MERN stack to deliver dynamic user experiences.                    </p>
                    <div>
                        <Link href="mailto:agarwalparidhi07@gmail.com" passHref>
                            <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#EEBD89] to-[#D13ABD] hover:bg-slate-200 text-white'>
                                Hire Me
                            </button>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1FArbV-J40qrzJRU5L5wYU-gLT9CGXX-W/view?usp=drive_link" passHref>
                            <button className='px-1 py-1 w-full sm:w-fit rounded-full  bg-gradient-to-br from-[#EEBD89]  to-[#D13ABD] hover:bg-slate-800 text-white border mt-3'><span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download Resume</span></button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='col-span-4 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w=[250px] h=[250px] lg:w-[500px] lg:h-[500px] relative'>
                        <Image src='/images/hero-image.png'
                            alt='my-img'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default HeroSection
