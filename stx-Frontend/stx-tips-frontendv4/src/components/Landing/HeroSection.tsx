import { useContext, useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Users, Shield, Zap } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useAppContext } from '@/context/AppContext';
import { useNavigate } from 'react-router-dom';
import {
  authenticate,
  getUserData,
  signUserOut,
  userSession,
} from '@/lib/auth';
import { UserData } from '@/lib/type';
import EmailModal from '../Utils/EmailModal';
import VerifyEmailModal from '../Utils/VerifyEmailModal'