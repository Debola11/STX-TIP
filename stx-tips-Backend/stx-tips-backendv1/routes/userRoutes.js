import express from "express";
import
{
    sendTipNotification,
    submitUserDetails,
    verifyAccount,
    getUserByWallet,
    getUserByEmail,
    checkUserExists,
    getVerifiedUsers
} from "../controllers/UserController.js";

const router = express.Router();

router.route("/verify-account").post(verifyAccount);

router.route("