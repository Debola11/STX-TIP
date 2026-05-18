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
    { name: 'Rewards', icon: <Gift className="h-5 w-5"