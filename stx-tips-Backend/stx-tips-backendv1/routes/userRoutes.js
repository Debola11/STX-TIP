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
} from "../controllers/UserControl