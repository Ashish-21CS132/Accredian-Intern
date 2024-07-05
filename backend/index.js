// index.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
const port = 3004;

app.use(bodyParser.json());
app.use(cors({
  credentials:true,
  origin: 'http://localhost:3000',
  
}));

app.post('/api/referrals', async (req, res) => {
  console.log('Request body:', req.body);
  const { referrerName, referrerEmail, refereeName, refereeEmail } = req.body;

  try {
    const newReferral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail
      }
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'roguptaji76@gmail.com',
        pass: 'adzq hgfm fmiv fznc'
      }
    });

    const mailOptions = {
      from: 'roguptaji76@gmail.com',
      to: refereeEmail,
      subject: 'You have been referred!',
      text: `Hi ${refereeName},\n\n${referrerName} has referred you.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email' });
      }
      res.status(200).json(newReferral);
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create referral' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
