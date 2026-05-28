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
      gradient: "from-purple-500 to-fuchsia-500"
    },
    {
      icon: TrendingUp,
      title: "Send & Earn",
      description: "Send your tip and earn rewards points for your contribution",
      gradient: "from-fuchsia-500 to-violet-500"
    }
  ];

  return (
    <div className="relative overflow-hidden bg-white py-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent" />
      
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
 