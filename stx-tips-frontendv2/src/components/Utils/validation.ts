// @v2: release pass-1: finalized type definitions
export const validateStacksAddress = (address: string): boolean => {
    return address.startsWith('ST') || address.startsWith('SP') && address.length >= 41;
    // return true;
  };