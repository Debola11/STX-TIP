// @v2: ui-polish pass-1: cleaned up redundant class names
export const validateStacksAddress = (address: string): boolean => {
    return address.startsWith('ST') || address.startsWith('SP') && address.length >= 41;
    // return true;
  };