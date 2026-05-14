import { openContractCall } from '@stacks/connect';
// import { StacksTestnet } from '@stacks/network';
import { 
  AnchorMode, 
  PostConditionMode, 
  stringAsciiCV, 
  uintCV 
} from '@stacks/transactions';
import { CONTRACT_CONFIG } from './constants';

// const NETWORK 