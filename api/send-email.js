import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Use environment variables for security
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  if (!user || !pass) {
    return res.status(500).json({ message: 'Email credentials not set in environment variables.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user, pass },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: user,
    subject: 'Form Submission For 2 days K8s Bootcamp',
    text: `You received a message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
} 