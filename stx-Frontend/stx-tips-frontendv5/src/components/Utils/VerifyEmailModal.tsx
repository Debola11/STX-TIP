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
    {
        e.preventDefault();
        if (!verificationCode.trim()) return;
        setIsLoading(true);

        try
        {
            const response = await fetch('https://stx-tip.onrender.com/api/v1/users/verify-account', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    activation_token: activationToken,
                    activation_Code: activation_Code
                }),
            });

            const result = await response.json();


            if (response.ok)
            {
                setIsLoading(false);
                toast.success(result.message);
                onOpenChange(false);
            }
            else
            { 
                toast.error(result.message);
                setIsLoading(false);
            }

            // Handle successful verification
        } catch (error: any)
        {
            console.error('Verification failed:', error);
            toast.error(error.message);
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md border border-violet-200/10 bg-white dark:bg-gray-900 shadow-2xl shadow-violet-500/10">
                <div className="relative overflow-hidden rounded-lg p-6">
             