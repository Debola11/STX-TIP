import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Transaction } from '@/lib/type';

export const History: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  // Sample data - replace with real data in production
  const transactions: Transaction[] = [
    { id: '1', sender: '0x1234567890abcdef', recipient: '0xabcdef1234567890', amount: 10, timestamp: new Date('2024-12-09T10:00:00') },
    { id: '2', sender: '0x2345678901