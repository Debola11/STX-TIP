import React from 'react';
import { Search, Loader2, UserCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface RecipientInputProps {
  recipientInput: string;
  setRecipientInput: (value: string) => void;
  searching: boolean;
  validationError: string;
  userInfo: {
    email?: string;
    found?: boolean;
  };
  disabled?: boolean;
}

export const RecipientInput: React.FC<RecipientInputProps> = ({
  recipientInput,
  setRecipientInput,
  searching,
  validationError,
  userInfo,
  disabled = false
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Recipient Stacks Address
      </label>
      <div 