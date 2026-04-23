// @v2: error-handling pass-1: added retry logic for requests
export const validateStacksAddress = (address: string): boolean => {
    return address.startsWith('ST') || address.startsWith('SP') && address.length >= 41;
    // return true;
  };