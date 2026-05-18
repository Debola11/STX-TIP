import { FC, useContext, useState } from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { authContext } from '@/context/AuthContext';

interface VerifyEmailModalProps
{
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    userEmail?: string;
}

const VerifyEmailModal: FC<VerifyEmailModalProps> = ({
    isOpen,
    onOpenChange,
    userEmail,
}) =>
{
    const [verificationCode, setVerificationCode] = useState('');
    const { activationToken, activation_Code } = useContext(authContext);
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) =>
  