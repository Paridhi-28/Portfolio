"use client"
import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr:false})


const achievementsList = [
    {
        matric: "Projects",
        value: "20",
        postfix : "+",
    },
    {
        matric: "Leet Code",
        value: "100",
        postfix : "+",
    },
  
]

const AchievementsSection = () => {
    return (
        <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='border-[#33353F] border rounded-md py-8 flex flex-row items-center justify-between'>
                {achievementsList.map((achievement, index) => {
                    return (
                        <div key={index}
                            className='flex flex-col items-center justify-center mx-4'>
                            <h2 className='text-white text-4xl font-bold flex flex-row'>
                                <AnimatedNumbers includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale='en-US'
                                className='text-white text-4xl font-bold'
                                configs={((_, index) => {
                                    return{
                                        mass:1,
                                        friction: 100,
                                        tensions: 100 * (index +1),
                                    }
                                })}
                                />
                                {achievement.postfix}</h2>
                            <p className='text-[#ADB7BE] text-base'>
                                {achievement.matric}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchievementsSection