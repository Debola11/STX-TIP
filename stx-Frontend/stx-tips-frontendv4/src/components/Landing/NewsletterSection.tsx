import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail('');
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from