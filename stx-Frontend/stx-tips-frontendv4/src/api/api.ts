import { NETWORK_CONFIG } from "@/lib/constants";

export const fetchUserBalance = async (userAddress: string) => {
  try {
    const response = await fet