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

export async function submitUserWalletData(userData: UserWalletData): Pro