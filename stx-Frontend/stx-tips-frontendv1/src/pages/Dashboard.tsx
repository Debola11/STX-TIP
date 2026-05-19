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
      icon: <Wallet className="h-6