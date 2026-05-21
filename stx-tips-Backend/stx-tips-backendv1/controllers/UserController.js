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

  if (checkEmail) return next(new AppError("Email already exists", 400));
  if (checkWallet) return next(new AppError("Wallet address already exists", 400));

  // Create user without saving
  const user = new User({
    email,
    wallet,
    isverified: false
  });

  const { verificationToken, activationCode } = createVerificationToken(user);


  // Save user to database
  await user.save();

  // Send verification email
  const data = {
    user: { email: user.email },
    activationCode
  };

  await new Email(user, data).sendVerificationLink();

  res.status(201).json({
    success: true,
    verificationToken,
    activationCode,
    message: `Please check your email: ${user.email} to verify your account!`
  });
});

// Verify account endpoint
export const verifyAccount = catchAsync(async (req, res, next) => {

  const verification_token = req.body.activation_token;
  const { activation_Code } = req.body;

  console.log(verification_token, activation_Code);

  // Verify token
  const decoded = jwt.verify(verification_token, process.env.VERIFY_EMAIL_SECRET);

  if (decoded.activationCode