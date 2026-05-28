import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { validateStacksAddress } from '../Utils/validation';
import { fetchUserWalletInfo } from '../../services/apiService';
import { useTipTransaction } from '../../hooks/useTipTransaction';
import { TipConfirmationDialog } from './TipConfirmationDialog';
import { useAppContext } from '@/context/AppContext';
import { RecipientInput } from './RecipientInput';

interface UserInfo {
    email?: string;
    walletAddress?: string;
    found?: boolean;
    error?: string;
}

interface QuickSendProps {
    initialAddress?: string;
}

export const QuickSend: React.FC<QuickSendProps> = ({ initialAddress }) => {
    const { walletConnected } = useAppContext();
    const [recipientInput, setRecipientInput] = useState<string>(initialAddress || '');
    const [amount, setAmount] = useState<string>('');
    const [userInfo, setUserInfo] = useState<UserInfo>({});
    const [searching, setSearching] = useState<boolean>(false);
    const [validationError, setValidationError] = useState<string>('');
    const [showConfirmDialog, s