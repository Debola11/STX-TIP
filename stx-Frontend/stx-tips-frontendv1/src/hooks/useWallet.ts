// import { useState, useCallback } from 'react';
// import { showConnect } from '@stacks/connect';
// import { APP_CONFIG } from '@/lib/constants';

// export const useWallet = () =>
// {
//     const [walletConnected, setWalletConnected] = useState(false);
//     const [walletAddress, setWalletAddress] = useState<string | null>(null);

//     const connectWallet = useCallback(async () =>
//     {
//         showConnect({
//             appDetails: {
//                 na