import { useState } from 'react';
import { useConnect } from '@stacks/connect-react';
import { AnchorMode, PostConditionMode } from '@stacks/transactions';
import { NETWORK, CONTRACT_ADDRESS, CONTRACT_NAME } from '@/config/stacks';
import { prepareTipArgs } from '../components/Util