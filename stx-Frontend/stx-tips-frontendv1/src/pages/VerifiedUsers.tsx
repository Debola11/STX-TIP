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
  