import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does TipStack work?",
    answer: "TipStack uses the Stacks blockchain to facilitate secure, instant tips between users. Connect your wallet, enter the recipient's address, choose an amount, and send your tip!"
  },
  {
    question: "What are the transaction fees?",
    answer: "Transaction fees are minimal and based on the current network conditions. We always display the exact fee before you confirm any transaction."
  },
  {
    question: "How do I earn rewards?",
    answer: "You earn points for every tip you send or receive. These points contribute to your ranking and unlock special badges and rewards as you reach different milestones."
  },
  {
    question: "Is my wallet secure?",
    answer: "Yes! We never store your private keys. All transactions are secured by the Stacks blockchain and require your explicit approval."
  }
];

export const FAQSection = () => {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-violet-950 to-purple-950 py-16 rounded-lg">
      
      {/* Glowing orb effects */}
      <div cl