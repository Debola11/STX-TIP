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
import toast from '