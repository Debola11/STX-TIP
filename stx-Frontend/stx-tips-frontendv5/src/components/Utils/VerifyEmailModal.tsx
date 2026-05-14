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
                    {/* Animated gradient accent */}
                    {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-purple-500" /> */}

                    <div className="relative z-10 space-y-6">
                        {/* Header with icon */}
                        <div className="text-center space-y-2">
                            <div className="flex items-center justify-center mx-auto mb-4">
                                <div className="bg-violet-500 rounded-full p-1">
                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                </div>
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                                Verify Your Email
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300/90 text-sm px-4">
                                We've sent a verification code to{' '}
                                <span className="font-medium text-violet-600 dark:text-violet-300">
                                    {userEmail || 'your email'}
                                </span>. Enter it below to start tipping!
                            </p>
                        </div>

                        {/* Verification Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="relat