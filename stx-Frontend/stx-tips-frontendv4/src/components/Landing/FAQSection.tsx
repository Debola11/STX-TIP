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
    answer: "You earn points for every tip you send or receive. These points contribute to your ranki