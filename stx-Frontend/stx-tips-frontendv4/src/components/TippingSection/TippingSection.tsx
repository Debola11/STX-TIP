import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { validateStacksAddress } from '../Utils/validation';
import { fetchUserWalletInfo } from '../../services/apiService';
import { useTipTransaction } from '../../hooks/useTipTransaction';
import { RecipientInput } from './RecipientInput';
import { BenefitsList } from './BenefitsList';
import { TipConfirmationDialog } from './TipConfirmationDialog';
import { containerVariants, itemVariants } from './animations';
import { useAppContext } from '@/context/AppContext';

interface UserInfo
{
  email?: string;
  walletAddress?: string;
  found?: boolean;
  error?: string;
}

export const TippingSection: React.FC = () =>
{
  const { walletConnected } = useAppContext();
  const [recipientInput, setRecipientInput] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [userInfo, setUserInfo] = useState<UserInfo>({});
  const [searching, setSearching] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);

  const resetForm = () =>
  {
    setRecipientInput('');
    setAmount('');
    setUserInfo({});
    setShowConfirmDialog(false);
    setValidationError('');
  };

  const { processTip, isProcessing } = useTipTransaction({
    onSuccess: () =>
    {
      resetForm();
    },
    onError: (error) =>
    {
      setValidationError(error);
      setShowConfirmDialog(false);
    }
  });

  const fetchUserInfo = async (input: string) =>
  {
    setSearching(true);
    setValidationError('');

    try
    {
      if (validateStacksAddress(input))
      {
        const data = await fetchUserWalletInfo(input);
        setUserInfo({
          email: data.data.email,
          walletAddress: input,
          found: !!data.data.email
        });
      } else
      {
        setValidationError('Invalid Stacks address format');
      }
    } catch (error)
    {
      setUserInfo({ error: 'Failed to fetch user info' });
      if (!walletConnected)
      {
        setValidationError('Please connect your wallet first to continue');
      } else
      {
        setValidationError('Unverified wallet address');
      }
    } finally
    {
      setSearching(false);
    }
  };

  useEffect(() =>
  {
    const timeoutId = setTimeout(() =>
    {
      if (recipientInput && recipientInput.length > 2)
      {
        fetchUserInfo(recipientInput);
      } else
      {
        setUserInfo({});
        setValidationError('');
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [recipientInput]);

  const handleSendTip = () =>
  {
    if (!recipientInput || !amount)
    {
      setValidationError('Please verify recipient and amount');
      return;
    }

    if (!validateStacksAddress(recipientInput))
    {
      setValidationError('Invalid wallet address');
      return;
    }

    setShowConfirmDialog(true);
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg p-8 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="send-tip"
    >
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-violet-100/20 to-purple-100/20 blur-3xl transform rotate-12" />

      <motion.h2
        className="text-3xl font-bold bg-gradient-to-r from-violet-900 to-purple-900 bg-clip-text text-transparent mb-8"
        variants={itemVariants}
      >
        Send a Tip
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <motion.div className="lg:col-span-3 space-y-6" variants={itemVariants}>
          <RecipientInput
            recipientInput={recipientInput}
            setRecipientInput={setRecipientInput}
            searching={searching}
            validationError={validationError}
            userInfo={userInfo}
          />

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Amount (STX)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              placeholder="Enter amount to tip"
              className="block w-full px-4 py-3 border border-gray-200 rounded-xl bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <motion.button
            onClick={handleSendTip}
        