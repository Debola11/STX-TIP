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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px