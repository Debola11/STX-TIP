import React from 'react';
import { useAppContext } from '../../context/AppContext';
import { Sidebar } from '../Navigation/Sidebar';
import { Header } from '../Navigation/Header';
import { Dashboard } from '@/pages/Dashboard';
import { History } from '@/pages/History';
import { Rewards } from '@/pages/Rewards';
import { Settings } from '@/pages/Settings';
import { HomePage } from '@/pages/HomePage';

export const AppLayout: React.FC = () =>
{
    const { currentPage } = useAppContext();

    if (currentPage === 'home') {
        return (
            <div className="min-h-screen bg-gray-50">
                <Header />
                <main className="pt-16">
                    <HomePage />
             