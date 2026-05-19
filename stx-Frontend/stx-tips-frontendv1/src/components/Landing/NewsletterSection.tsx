import { useState } from 'react';
import { Send, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  cons