// utils/mailer.ts
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com", 
  port: 465, 
  secure: true, 
  auth: {
    user: process.env.GOOGLE_EMAIL_ADDRESS, 
    pass: process.env.GOOGLE_PASSWORD, 
  },
});

export async function sendMail(subject: string, text: string, html?: string) {
  const mailOptions = {
    from: `"Medplus Cares" <${process.env.GOOGLE_EMAIL_ADDRESS}>`, 
    to: process.env.RECEIVER_EMAIL,
    subject, 
    text, 
    html, 
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}