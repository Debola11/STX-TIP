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
    con