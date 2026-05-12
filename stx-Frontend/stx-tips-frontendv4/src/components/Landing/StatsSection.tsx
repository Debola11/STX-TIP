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
    icon: ArrowUpRi