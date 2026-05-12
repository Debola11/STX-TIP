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

 