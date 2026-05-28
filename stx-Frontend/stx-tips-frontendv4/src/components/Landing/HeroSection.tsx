import { useContext, useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Users, Shield, Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useAppContext } from '@/context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  authenticate,
  getUserData,
  signUserOut,
  userSession,
} from '@/lib/auth';
import { UserData } from '@/lib/type';
import EmailModal from '../Utils/EmailModal';
import VerifyEmailModal from '../Utils/VerifyEmailModal';
import { QuickSend } from '@/components/TippingSection/QuickSend';
import { authContext } from '@/context/AuthContext';

interface HeroSectionProps {}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState<boolean>(false);
  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState<boolean>(false);
  const [isQuickSendOpen, setIsQuickSendOpen] = useState<boolean>(false);
  
  const navigate = useNavigate();
  const { walletAddress, setWalletAddress, setWalletConnected } = useAppContext();
  const { dispatch } = useContext(authContext);

  console.log(userData);

  // Keep all the existing useEffect and functions exactly as they were
  useEffect(() => {
    const checkAuth = async () => {
      if (userSession.isSignInPending()) {
        const userData = await userSession.handlePendingSignIn();
        setIsAuthenticated(true);
        setUserData(userData);
        setWalletAddress(userData?.profile?.stxAddress?.testnet ?? null);
        setWalletConnected(true);
        await checkUserExists(userData?.profile?.stxAddress?.testnet);
      } else if (userSession.isUserSignedIn()) {
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

  const checkUserExists = async (walletAddress: string | null) => {
    if (!walletAddress) return;

    try {
      const response = await fetch(`https://stx-tip.onrender.com/api/v1/users/exists?wallet=${walletAddress.toLowerCase()}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to check user existence');
      }

      const data = await response.json();
      if (!data.exists) {
        setIsEmailModalOpen(true);
      }
    } catch (error) {
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

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim().toLowerCase() || !walletAddress?.toLowerCase()) return;

    try {
      setIsLoading(true);

      const response = await fetch('https://stx-tip.onrender.com/api/v1/users/connect-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          wallet: walletAddress
        }),
      });

      const result = await response.json();

      if (response.ok) {
        dispatch({
          type: "ACTIVATE_USER",
          payload: {
            activationToken: result.verificationToken,
            activation_Code: result.activationCode
          }
        });

        setIsLoading(false);
        setIsVerifyModalOpen(true);
      } else {
        toast.error(result.message);
        setIsLoading(false);
      }

      setIsEmailModalOpen(false);
    } catch (error: any) {
      console.error('Failed to save user data:', error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStartGiving = () => {
    if (isAuthenticated) {
      setIsQuickSendOpen(true);
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-violet-950 to-purple-950">
      {/* Keep all existing background elements and styling */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-full h-full opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.2) 0%, transparent 50%)',
            animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-10">
        <div className="grid lg:grid-cols-2