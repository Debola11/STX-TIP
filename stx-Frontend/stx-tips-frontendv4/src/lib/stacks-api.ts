import { NETWORK, CONTRACT_ADDRESS, CONTRACT_NAME } from '@/config/stacks';
import
    {
        fetchCallReadOnlyFunction as callReadOnlyFunction,
        standardPrincipalCV,
        uintCV,
        stringAsciiCV,
    } from '@stacks/transactions';


export async function getUserStats(userAddress: string)
{
    const functionName = 'get-user-tip-stats';

    try
    {
        const result = await callReadOnlyFunction({
            network:NETWORK,
            cont