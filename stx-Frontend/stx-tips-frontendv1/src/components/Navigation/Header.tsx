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
import VerifyEmailModal from '../Utils/VerifyEmailModal';

export const Header = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState(false);

  console.log(userData);
  
  const {walletAddress, setWalletAddress, currentPage, setCurrentPage, setWalletConnected } = useAppContext();
  const { dispatch } = useContext(authContext);

  useEffect(() =>
    {
      const checkAuth = async () =>
      {
        if (userSession.isSignInPending())
        {
          const userData = await userSession.handlePendingSignIn();
          setIsAuthenticated(true);
          setUserData(userData);
          setWalletAddress(userData?.profile?.stxAddress?.testnet ?? null);
          setWalletConnected(true);
          await checkUserExists(userData?.profile?.stxAddress?.testnet);
        } else if (userSession.isUserSignedIn())
        {
          const userData = getUserData();
          setIsAuthenticated(true);
          setUserData(userData);
          setWalletAddress(userData?.profile?.stxAddress?.testnet ?? null);
          setWalletConnected(true);
          await checkUserExists(userData?.profile?.stxAddress?.testnet);
        }
      };
  
      checkAuth();
    }, []);

    const checkUserExists = async (walletAddress: string | null) =>
      {
        if (!walletAddress) return;
    
        try
        {
          const response = await fetch(`https://stx-tip.onrender.com/api/v1/users/exists?wallet=${walletAddress.toLowerCase()}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
    
          if (!response.ok)
          {
            throw new Error('Failed to check user existence');
          }
    
          const data = await response.json();
          if (!data.exists)
          {
            setIsEmailModalOpen(true);
          }
        } catch (error)
        {
          console.error('Failed to check user existence:', error);
        }
      };

  const handleAuth = () => {
    if (isAuthenticated) {
      signUserOut();
      setWalletAddress(null);
      setIsAuthenticated(false);
    } else {
      authenticate();
    }
  };

  const toggleDashboard = () => {
    setCurrentPage(currentPage === 'home' ? 'dashboard' : 'home');
  };

  const formatWalletAddress = (address: string) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
    {
      e.preventDefault();
      if (!email.trim().toLowerCase() || !walletAddress?.toLowerCase()) return;
  
      console.log('email:', email);
      console.log('wallet:', walletAddress);
  
      try
      {
        setIsLoading(true);
  
        const response = await fetch('https://stx-tip.onrender.com/api/v1/users/connect-wallet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim().toLowerCase(),
            wallet: walletAddr