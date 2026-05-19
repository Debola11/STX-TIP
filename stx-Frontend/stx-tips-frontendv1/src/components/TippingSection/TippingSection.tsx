import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { validateStacksAddress } from '../Utils/validation';
import { fetchUserWalletInfo } from '../../services/apiService';
import { useTipTransaction } from '../../hooks/useTipTransaction';
import { RecipientInput } from './Reci