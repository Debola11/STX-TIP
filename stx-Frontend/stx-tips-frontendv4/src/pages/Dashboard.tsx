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
      type: 'sent',
      address: '0x1234...5678',
      amount: '50 STX',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      type: 'received',
      address: '0x8765...4321',
      amount: '25 STX',
      timestamp: '5 hours ago'
    }
  ];

  const chartData = [
    { name: 'Mon', sent: 20, received: 15 },
    { name: 'Tue', sent: 35, received: 25 },
    { name: 'Wed', sent: 25, received: 30 },
    { name: 