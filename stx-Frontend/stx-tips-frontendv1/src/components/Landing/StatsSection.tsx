import { motion } from 'framer-motion';
import { TrendingUp, Users, ArrowUpRight } from 'lucide-react';

const statsData = [
  {
    value: '$1M+',
    label: 'Tips Processed',
    subtext: 'Across global communities',
    icon: TrendingUp,
    growth: '+127% this month',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    value: '10K+',
    label: 'Active Users',
    subtext: 'Growing community',
    icon: Users,
    growth: '+85% this month',
    color: 'from-violet-500 to-purple-500'
  },
  {
    value: '50K+',
    label: 'Transactions',
    subtext: 'Secure transfers',
    icon: ArrowUpRight,
    growth: '+200% this month',
    color: 'from-pink-500 to-rose-500'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
  