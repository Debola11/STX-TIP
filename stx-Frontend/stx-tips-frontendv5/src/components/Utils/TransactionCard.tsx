import { Transaction } from '@/lib/type';
import React from 'react';

interface TransactionCardProps {
  transaction: Transaction;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ 