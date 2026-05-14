import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How does TipStack work?",
    answer: "TipStack uses the Stacks blockchain to facilitate secure, instant tips between users. Connect your wallet, enter the recipient's address, choose an amount, and