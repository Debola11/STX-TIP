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
      } el