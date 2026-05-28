import { FC } from 'react';
import { Sparkles, Mail } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface EmailModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const EmailModal: FC<EmailModalProps> = ({
  isOpen,
  onOpenChange,
  email,
  setEmail,
  handleSubmit,
  isLoading
}) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md border-0 bg-gradient-to-b from-gray-900 via-violet-950 to-purple-950 shadow-xl shadow-violet-500/20">
      <div className="relative overflow-hidden rounded-lg p-6">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-purple-500/10 animate-gradient" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="relative z-10 space-y-6">
          {/* Header with icon */}
          <div className="text-center space-y-2">
            <div className="bg-violet-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-violet-300" />
            </div>
            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text">
              Welcome to the Community
            </h2>
            <p className="text-gray-300/90 text-sm">
              Please enter your email to complete your profile and start giving
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                placeholder="Enter your email address"
                value={email}
                onChange={(e: React.Change