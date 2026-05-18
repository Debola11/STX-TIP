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
      <div className="relative overflow-hidden 