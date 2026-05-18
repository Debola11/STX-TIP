import { STACKS_TESTNET, STACKS_MAINNET } from '@stacks/network';

// Update these based on your deployment environment
export const IS_MAINNET = false;
export const NETWORK = IS_MAINNET ? STACKS_MAINNET : STACKS_TESTNET;

// Set the appropriate API URL based on the network
// NETWORK.coreApiUrl = IS_MAINNET 
//   ? 'https://stacks-node-api.mainnet.stacks.co'
//   : 'https://stacks-node-api.testnet.stacks.co';

// Co