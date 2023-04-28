const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Create a transporter for sending email
// TODO: update user and pass with ENV
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_gmail_address",
    pass: "your_gmail_password",
  },
});

exports.sendEmail = functions.https.onCall(async (data, context) => {
  // Extract data from request
  const { name, email, phone, products } = data;

  // Compose email message
  const message = {
    from: "your_gmail_address",
    to: "test@email.com",
    subject: "New message from your website",
    html: `
      <p>From: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Products: ${products.join(", ")}</p>
    `,
  };

  try {
    // Send email
    await transporter.sendMail(message);
    console.log("Email sent successfully");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Failed to send email" };
  }
});
