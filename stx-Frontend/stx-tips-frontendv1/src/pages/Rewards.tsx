import React from 'react';
import { Gift, ChevronRight, Lock } from 'lucide-react';

interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  unlocked: 