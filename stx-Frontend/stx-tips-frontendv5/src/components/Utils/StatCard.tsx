import { Stat } from '@/lib/type';
import React from 'react';

export const StatCard: React.FC<Stat> = ({ title, value, change, icon }) => (
  <div className="bg-white rounded-xl shadow-sm p-6 ho