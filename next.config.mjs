/** @type {import('next').NextConfig} */
const nextConfig = {
    // other configurations
};

import dotenv from 'dotenv';
dotenv.config();

export default {
    ...nextConfig,
    env: {
        GMAIL_USER: process.env.GMAIL_USER,
        GMAIL_PASS: process.env.GMAIL_PASS,
    },
};
