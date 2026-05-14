import { Transaction } from '@/lib/type';
import React from 'react';

interface TransactionCardProps {
  transaction: Transaction;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => (
  <div className="flex items-center justify-between py-3 bor