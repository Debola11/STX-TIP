import { UserWalletData } from "@/lib/type";

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.yourbackend.com';
const API_BASE_URL = 'https://api.yourbackend.com';

export class APIError extends Error
{
    constructor(public status: number, message: string)
    {
        super(message);
        this.name = 'APIError';
    }
}

export async function submitUserWalletData(userData: UserWalletData): Promise<{ success: boolean; userId?: string }>
{
    try
    {
        const response = await fetch(`${API_BASE_URL}/api/users/wallet`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!r