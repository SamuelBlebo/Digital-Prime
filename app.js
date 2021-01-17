const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const connectDB = require ('./config/db')


//Load config 
dotenv.config({path: './config/config.env'})

connectDB()

const app = express()

//Morgan Logging

if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'))
}

//  Handlebars
app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Static folder
app.use(express.static(path.join(__dirname, 'public')));
app.use("/public", express.static('public')); 

//Routes
app.use('/', require('./routes/index'))

app.post('/send', (req, res) => {
  const output = `
  <p> You have a new Digital Prime Customer Message</p>
  <h3>Contact Details </h3>
  <ul>
  <li>Name: ${req.body.name}</li>
  <li>Email: ${req.body.email}</li>
  <li>Phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `

  "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.digitalprimegh.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'info@digitalprimegh.com', // generated ethereal user
      pass: 'XXXXX', // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Customers👻 " <customer@digitalprimegh.com>', // sender address
    to: "info@digitalprimegh.com", // list of receivers
    subject: "Customer's Message", // Subject line
    text: "Nothing.", // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

  res.render('success')
}

main().catch(console.error);

})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
