import { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { AnchorMode, PostConditionMode } from '@stacks/transactions';
import { NETWORK, CONTRACT_ADDRESS, CONTRACT_NAME } from '@/config/stacks';
import { prepareTipArgs } from '../components/Utils/stackUtils';
import { notifyTipSent } from '../services/apiService';

interface UseTipTransactionProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export const useTipTransaction = ({ onSuccess, onError }: UseTipTransactionProps) => {
  const { doContractCall } = useConnect();
  const [isProcessing, setIsProcessing] = useState(false);

  const processTip = async (recipient: string, amount: string) => {
    setIsProcessing(true);
    
    try {
      console.log('Starting tip transaction...');
      console.log('Contract details:', {
        address: CONTRACT_ADDRESS,
        name: 