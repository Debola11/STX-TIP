import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export default class Email
{
  constructor(user, data)
  {
    this.to = user.email;
    this.data = data;
    this.from = `Theophilus<${process.env.SMTP_MAIL}>`;
  }

  newTransport()
  {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  // Send Actual Email
  async send(template, subject)
  {
    const __dirname = path.resolve();
    //get the path to the email template file
    const emailTemplatePath = path.join(
      __dirname,
      "./Emails/mailTemplates",
      template
    );

    //Render the email template with EJS
    const html = await ejs.renderFile(emailTemplatePath, this.data);

    // Define mail options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
    };