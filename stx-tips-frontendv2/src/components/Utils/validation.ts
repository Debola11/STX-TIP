// @v2: a11y pass-1: improved form label associations
export const validateStacksAddress = (address: string): boolean => {
    return address.startsWith('ST') || address.startsWith('SP') && address.length >= 41;
    // return true;
  };