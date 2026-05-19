import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Transaction } from '@/lib/type';

export const History: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter,