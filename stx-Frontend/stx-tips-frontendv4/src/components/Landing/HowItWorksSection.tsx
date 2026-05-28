import { Wallet, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Connect Wallet",
      description: "Connect your Stacks wallet securely to start sending and receiving tips",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Choose Recipient",
      description: "Enter the recipient's address or search for their username",
      grad