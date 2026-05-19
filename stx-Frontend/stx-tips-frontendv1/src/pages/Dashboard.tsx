import
  {
    Wallet,
    TrendingUp,

    Award,
    ArrowUpCircle,
    ArrowDownCircle,
    Clock
  } from 'lucide-react';
import
  {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import
  {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';
import QuickSend from '@/components/TippingSection/QuickSend';

export const Dashboard = () =>
{
 

  // Sample data - would be replaced with real blockchain data
  const stats = [
    {
      title: 'Total Balance',
      value: '1,234 STX',
      change: '+12.3%',
      icon: <Wallet className="h-6 w-6 text-violet-600" />
    },
    {
      title: 'Tips Sent',
      value: '456 STX',
      change: '+8.2%',
      icon: <ArrowUpCircle className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Tips Received',
      value: '789 STX',
      change: '+15.7%',
      icon: <ArrowDownCircle className="h-6 w-6 text-blue-600" />
    },
    {
      title: 'Reward Points',
      value: '1,250',
      change: '+25.3%',
      icon: <Award className="h-6 w-6 text-yellow-600" />
    }
  ];

  const recentTips = [
    {
      id: 1,
      type: 's