import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  const { subject, email, message } = req.body;

  if (!subject || !email || !message) {
    return res.status(400).json({ error: 'Subject, email, and message are required.' });
  }
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'whilenetworks@gmail.com',
      pass: 'gcjo swqc slpm pfrq',
    },
  });

  const incomingMessage = `email: ${email} send you a message: ${message}`;
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'agarwalparidhi07@gmail.com"',
    subject: subject,
    text: incomingMessage,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.response);
    res.status(200).json({ success: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email.' });
  }
}
