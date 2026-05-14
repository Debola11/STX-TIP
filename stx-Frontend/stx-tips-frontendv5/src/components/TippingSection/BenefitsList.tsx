import React from 'react';
import { Gift, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { itemVariants } from './animations';

const benefits = [
  "Instant, secure transactions on Stacks blockchain",
  "Earn rewards and badges for your contributions",
  "Support your favorite content creators directly",
  "Track all your transactions in one place"
];

export const BenefitsList: React.FC = () => {
  return (
    <motion.div 
      className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100/50 backdrop-blur-sm"
      variants={itemVariants}