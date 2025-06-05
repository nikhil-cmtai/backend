require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function formatBody(body) {
  return Object.entries(body)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
}

app.post('/send-contact-email', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Contact Form Submission`,
      text: formatBody(req.body),
    });
    res.json({ success: true, message: 'Contact email sent!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/send-career-mail', async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      subject: `Career Application Submission`,
      text: formatBody(req.body),
    });
    res.json({ success: true, message: 'Career email sent!' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// }); 

module.exports = app;