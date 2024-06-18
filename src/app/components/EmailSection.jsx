"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GithubIcon from "../../../public/github-icon.svg"
import LinkedinIcon from "../../../public/linkedin-icon.svg"

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); 

        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/sendEmail";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);
            const resData = await response.json();

            if (response.ok) {
                setEmailSubmitted(true);
            } else {
                setError(resData.error || "An error occurred while sending the message.");
            }
        } catch (err) {
            setError(err.message || "An error occurred while sending the message.");
        }
    };

    return (
        <section className='grid md:grid-cols-2 my-12 py-24 gap-4 relative'>
            <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D13ABD] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2'>..</div>
            <div className='z-10'>
                <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
                <p className='text-[#ADB7BE] mb-4 max-w-md'>
                    I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you !!!
                </p>
                <div className='socials flex flex-row gap-2'>
                    <Link href="https://github.com/Paridhi-28">
                        <Image src={GithubIcon} alt="GitHub" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/paridhi-agarwal-ba3277288/">
                        <Image src={LinkedinIcon} alt="LinkedIn" />
                    </Link>
                </div>
            </div>
            <div>
                <form className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor="email" className='text-white block text-sm font-medium mb-2'>Your Email</label>
                        <input type="email" id='email' name='email' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='vivan@yahoo.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="subject" className='text-white block text-sm font-medium mb-2'>Subject</label>
                        <input type="text" id='subject' name='subject' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Just saying Hi' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor="message" className='text-white block text-sm font-medium mb-2'>Message</label>
                        <textarea name='message' id='message' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..." />
                    </div>
                    <button type='submit'
                        className='bg-[#D13ABD] hover:bg-[#921381] text-white font-medium py-2.5 px-2.5 rounded-lg w-full h-10'>
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection
