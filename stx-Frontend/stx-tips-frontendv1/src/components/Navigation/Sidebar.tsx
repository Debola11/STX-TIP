import React from 'react';
import { Trophy, History, Gift, Settings, LogOut, X } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';
import { NavItem } from '@/lib/type';

export const Sidebar: React.FC = () => {
  const { isOpen, setIsOpen, currentPage, setCurrentPage } = useAppContext();

  console.log("isOpen", isOpen);

  const navItems: NavItem[] = [
    { name: 'Dashboard', icon: <Trophy className="h-5 w-5" />, id: 'dashboard' },
    { name: 'History', icon: <History className="h-5 w-5" />, id: 'history' },
    { name: 'Rewards', icon: <Gift className="h-5 w-5" />, id: 'rewards' },
    { name: 'Settings', icon: <Settings className="h-5 w-5" />, id: 'settings' }
  ];

  return (
    <div className={`fixed top-0 left-0 h-full bg-gradient-to-b from-violet-900 to-purple-800 text-white w-64 p-6 transform transition-transform duration-200 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 z-30`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">TipStack</h1>
        <button onClick={() => setIsOpen(false)} className="lg:hidden">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav clas