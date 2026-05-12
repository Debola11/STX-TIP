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
  