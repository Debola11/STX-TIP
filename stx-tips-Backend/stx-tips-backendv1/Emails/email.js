import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";

export default class Email
{
  constructor(user, data)
  {
    this.to = user.email;
    this.data = data;
    this.fr