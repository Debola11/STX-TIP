// API endpoints
const API_BASE_URL = 'https://stx-tip.onrender.com';

export const fetchUserWalletInfo = async (walletAddress: string) =>
{
    try
    {
        const response = await fetch(`${API_BASE_URL}/users/wallet/${walletAddress}`);
        if (!response.ok)
        {
            throw new Error(`HTTP 