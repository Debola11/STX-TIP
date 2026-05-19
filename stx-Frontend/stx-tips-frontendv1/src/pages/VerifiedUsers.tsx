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
  const [users, setUsers] = useState<Verified