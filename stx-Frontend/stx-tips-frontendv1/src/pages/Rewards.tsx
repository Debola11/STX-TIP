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
      description: 'Receive 10% bonus on all tips fo