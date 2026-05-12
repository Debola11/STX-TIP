import React, { useContext, useEffect, useState } from 'react';
import { Bell, Menu, Home, Layout, LogOutIcon, WalletIcon } from 'lucide-react';
import { useAppContext } from '@/context/AppContext';
import {
  authenticate,
  getUserData,
  signUserOut,
  userSession,
} from '@/lib/auth';
import { UserData } from '@/lib/type';
import toast from 'react-hot-toast';
import { authContext } from '@/context/AuthContext';
import EmailModal from '../Utils/EmailModal';
import VerifyEmailModal from '../Utils/VerifyEmailModal';react-hot-toast';
import { authContext } from '@/context/AuthContext';
import EmailModal from '../Utils/EmailModal';
import VerifyEmailModal from '../Utils/VerifyEmailModal';