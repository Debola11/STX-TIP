import Email from "../Emails/email.js";
import catchAsync from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";
import AppError from "../errorHandlers/appError.js";

// Create Email verification token
export const createVerificationToken = (user) => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

  const verificationToken = jwt.sign(
    { user, activationCode },
    process.env.VERIFY_EMAIL_SECRET,
    {
      expiresIn: process.env.VERIFY_EMAIL_EXPIRES_IN,
    }
  );

  return {verificationToken, activationCode};
};

// Submit user details endpoint
export const submitUserDetails = catchAsync(async (req, res, next) => {
  const { email, wallet } = req.body;

  // Check if email or wallet already exists
  const checkEmail = await User.findOne({ email });
  const checkWallet = await User.findOne({ wallet });

  if (checkEmail) return next(new AppError("Email 