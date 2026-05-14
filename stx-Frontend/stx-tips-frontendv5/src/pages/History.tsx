import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Transaction } from '@/lib/type';

export const History: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Sample data - replace with real data in production
  const transactions: Transaction[] = [
    { id: '1', sender: '0x1234567890abcdef', recipient: '0xabcdef1234567890', amount: 10, timestamp: new Date('2024-12-09T10:00:00') },
    { id: '2', sender: '0x2345678901bcdef0', recipient: '0xbcdef01234567891', amount: 5, timestamp: new Date('2024-12-08T09:30:00') },
    { id: '3', sender: '0x3456789012cdef01', recipient: '0xcdef012334567892', amount: 15, timestamp: new Date('2024-12-07T09:00:00') },
    // Add more transactions as needed
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transaction History</h1>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2