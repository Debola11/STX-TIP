import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { QuickSend } from '@/components/TippingSection/QuickSend';
import { Loader2, Copy, CheckCircle } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface VerifiedUser {
  _id: string;
  email: string;
  wallet: string;
}

const VerifiedUsers: React.FC = () => {
  const [users, setUsers] = useState<VerifiedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<VerifiedUser | null>(null);
  const [isQuickSendOpen, setIsQuickSendOpen] = useState(false);
  const [copiedWallet, setCopiedWallet] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://stx-tip.onrender.com/api/v1/users/verified');
        const data = await response.json();
        
        if (data.success) {
          setUsers(data.data);
        } else {
          toast.error('Failed to fetch verified users');
        }
      } catch (error) {
        console.error('Failed to fetch verified users:', error);
        toast.error('Error loading verified users');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleTipClick = (user: VerifiedUser) => {
    setSelectedUser(user);
    setIsQuickSendOpen(true);
  };

  const copyToClipboard = async (wallet: string) => {
    try {
      await navigator.clipboard.writeText(wallet);
      setCopiedWallet(wallet);
      setTimeout(() => setCopiedWallet(null), 2000);
      toast.success('Wallet address copied!');
    } catch (err) {
      toast.error('Failed to copy wallet address');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-violet-950 to-purple-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <Loader2 className="h-8 w-8 animate-spin text-violet-400" />
            <p className="mt-4 text-violet-300">Loading verified users...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-violet-950 to-purple-950">
      <div className="relative">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="te