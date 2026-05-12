export interface Stat {
    title: string;
    value: string;
    change: string;
    icon?: React.ReactNode;
  }
  
  export interface NavItem {
    name: string;
    icon: React.ReactNode;
    id: string;
  }
  
  export interface Transaction {
    id: string;
    sender: string;
    recipient: string;
    am