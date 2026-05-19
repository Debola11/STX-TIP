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
//         console.error('Error preparing tip arg