import React from 'react';
import { Gift, ChevronRight, Lock } from 'lucide-react';

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  unlocked: boolean;
}

export const Rewards: React.FC = () => {
  const rewards: Reward[] = [
    {
      id: '1',
      title: 'Early Supporter',
      description: 'Receive 10% bonus on all tips for being an early platform adopter',
      points: 1000,
      unlocked: true
    },
    {
      id: '2',
      title: 'Tip Master',
      description: 'Unlock exclusive badge after receiving 100 tips',
      points: 2500,
      unlocked: false
    },
    {
      id: '3',
      title: 'High Roller',
      description: 'Get VIP s