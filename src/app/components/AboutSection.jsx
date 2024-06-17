"use client"
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML, CSS & JavaScript</li>
                <li>Node.js, Express & MongoDB</li>
                <li>React.js, Next.js</li>
                <li>BootStrap, Tailwind CSS</li>
                <li>Figma</li>
                <li>D.S.A. (Python)</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "Education",
        content: (
            <ul className='list-disc pl-2'>
                <li>I.E.T. Lucknow - B.Tech (2022-Present)</li>
                <li>D.D.P.S. - Intermediate (2021)</li>
             
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "Certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Full-Stack Developer</li>
                <li>Oasis Infobyte</li>
                <li>CodSoft</li>
                <li>OctaNet</li>

            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section id='about' className='text-white'>
            <div  className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src="/images/about-image.png" width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                    I am a passionate web developer and a BTech student with a keen interest in Python programming and UI/UX design. With a solid foundation in computer science and a drive for continuous learning, I strive to create functional, visually appealing, and user-friendly web applications. My expertise lies in full-stack development, where I leverage my skills in HTML, CSS, JavaScript, ReactJS, and MERN stack to build dynamic and responsive websites. As a Python enthusiast, I enjoy solving complex problems and implementing efficient algorithms to enhance the performance of web applications.                    </p>
                    <div className='flex flex-row justify-start mt-8 '>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills{" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("Education")} active={tab === "Education"}> {" "} Education {" "}</TabButton>
                        <TabButton selectTab={() => handleTabChange("Certifications")} active={tab === "Certifications"}> {" "} Certifications{" "}</TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection