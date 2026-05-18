import React, { useState } from 'react';
import { Bell, Shield, Wallet, Globe } from 'lucide-react';

export const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState({
    tips: true,
    milestones: true,
    news: false
  });

  const [privacy, setPrivacy] = useState({
    public: true,
    showAmount: true
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="space-y-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Bell className="h-5 w-5 text-violet-600" />
            <h2 className="text-lg font-