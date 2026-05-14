import { Transaction } from '@/lib/type';
import React from 'react';

interface TransactionCardProps {
  transaction: Transaction;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ transaction }) => (
  <div className="flex items-center justify-between py-3 border-b last:border-0 hover:bg-gray-50 transition-colors">
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 r