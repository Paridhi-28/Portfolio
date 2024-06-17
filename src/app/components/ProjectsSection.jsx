"use client"
import React, { useState , useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {animate, motion , useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Personal Portfolio Website",
        description: "A personal porfolio developed by using Next.js & Tailwind css.",
        image: "/images/projects/portfolio.jpg",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/Paridhi-28/Portfolio.git",
        previewUrl: "",
    },
    {
        id: 2,
        title: "Food Delivering Application",
        description: "A food delivering web application designed by using MERN stack and stripe as payment gateway.",
        image: "/images/projects/4.png",
        tag: ["All", "Web", "Mobile"],
        gitUrl: "https://github.com/Paridhi-28/Food-Delivery.git",
        previewUrl: "https://food-delivery-phi-eight.vercel.app/",
    },
    // {
    //     id: 3,
    //     title: "Crime-Detection Web Application",
    //     description: "A collaborative project developed to view the crime rate in a particular area.",
    //     image: "/images/projects/crime.jpg",
    //     tag: ["All", "Web"],
    //     gitUrl: "https://github.com/Paridhi-28/sheHacks-7.O.git",
    //     previewUrl: "https://crimevue.vercel.app/",
    // },
    {
        id: 4,
        title: "E-commerce Web Application",
        description: "A e-commerce platform which create and suggest items according to your filters.",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Paridhi-28/Fashion.git",
        previewUrl: "https://fashion-website-evqjorrm8-paridhis-projects.vercel.app/",
    },
    {
        id: 5,
        title: "Educational Platform",
        description: "A front-end project using HTML, CSS & JavaScript",
        image: "/images/projects/education.jpg",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Paridhi-28/Education-System-Website",
        previewUrl: "https://education-system-website.vercel.app/",
    },
    {
        id: 6,
        title: "Spotify Mini Version",
        description: "A front-end project using HTML & CSS",
        image: "/images/projects/spotify.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Paridhi-28/Spotify_clone.git",
        previewUrl: "https://paridhi-28.github.io/Spotify_clone/",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    const handleTagChange = (newTag) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

const cardVariants = {
    initial : {y:50, opacity:0},
    animate : {y:0, opacity:1}
}

    return (
        <section id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
              
              <ProjectTag onClick={handleTagChange} name="All" isSelected = {tag === "All"} />
              <ProjectTag onClick={handleTagChange} name="Web" isSelected = {tag === "Web"} />
                </div>
                <ul  ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project, index) =>(
                    <motion.li 
                    key={index}
                    variants={cardVariants} 
                    initial="initial"
                    transition={{duration: 0.3, delay: index * 0.4}}
                     animate= {isInView ? "animate" : "initial"}>
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                    </motion.li>
                    ))}
            </ul>
        </section>
    )
}

export default ProjectsSection