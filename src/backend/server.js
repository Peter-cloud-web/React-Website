import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 5174; // Match the frontend port

// Middleware
app.use(
  cors({
    origin: "http://localhost:5174", // Allow requests from this origin
    methods: ["POST"], // Allow only POST requests
  })
);
app.use(bodyParser.json());

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., Gmail)
  auth: {
    user: "pdaviescleaningservices@gmail.com", // Your email address
    pass: "your-email-password", // Your email password or an app-specific password
  },
});

// Route to handle form submission
app.post("/send-email", (req, res) => {
  const { firstName, lastName, email, contactNumber, cleaningService, message } = req.body;

  const mailOptions = {
    from: "pdaviescleaningservices@gmail.com", // Sender email
    to: "pdaviescleaningservices@gmail.com", // Recipient email
    subject: "New Cleaning Service Inquiry",
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Contact Number: ${contactNumber}
      Cleaning Service: ${cleaningService}
      Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});