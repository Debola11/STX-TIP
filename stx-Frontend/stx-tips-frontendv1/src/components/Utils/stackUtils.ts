// import { stringUtf8CV, uintCV } from '@stacks/transactions';

// // Convert STX amount to microstacks
// export const toMicroStacks = (amount: string): number =>
// {
//     return Math.floor(parseFloat(amount) * 1000000);
// };

// // Prepare contract call arguments
// export const prepareTipArgs = (recipient: string, amount: string) =>
// {
//     try
//     {
//         const microStacks = toMicroStacks(amount);
//         return {
//             args: [
//                 stringUtf8CV(recipient),
//                 uintCV(microStacks),
//                 stringUtf8CV('STX')
//             ],
//             microStacks
//         };
//     } catch (error)
//     {
//         console.error('Error preparing tip arguments:', error);
//         throw new Error('Failed to prepare transaction arguments');
//     }
// };

import { stringAsciiCV, uintCV, ClarityValue, ClarityType } from '@stacks/transactions';

// Convert STX amount to microstacks with validation
export const toMicroStacks = (amount: string): number => {
  try {
    const value = parseFloat(amount);
    if (isNaN(value)) throw new Error('Invalid amount');
    if (value < 0) throw new Error('Amount must be positive');
    return Math.floor(value * 1000000);
  } catch (error) {
    console.error('Error converting to microStacks:', error);
    throw error;
  }
};

// Serialize Clarity Value to a format the contract expects
export const serializeCV = (cv: ClarityValue): any => {
  switch (cv.type) {
    case ClarityType.UInt:
      return cv.value.toString();
    case ClarityType.StringASCII:  // Changed from StringUTF8 to StringASCII
 