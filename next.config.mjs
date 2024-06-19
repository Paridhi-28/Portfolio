/** @type {import('next').NextConfig} */
const nextConfig = {
    // other configurations can go here
    basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
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
  