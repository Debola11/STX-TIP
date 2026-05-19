// import React from 'react';
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

// interface TipConfirmationDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   amount: string;
//   recipientInput: string;
//   userInfo: {
//     email?: string;
//     found?: boolean;
//   };
//   onConfirm: () => Promise<void>;
//   transactionInProgress: boolean;
// }

// export const TipConfirmationDialog: React.FC<TipConfirmationDialogProps> = ({
//   open,
//   onOpenChange,
//   amount,
//   recipientInput,
//   userInfo,
//   onConfirm,
//   transactionInProgress,
// }) => {
//   return (
//     <AlertDialog open={open} onOpenChange={onOpenChange}>
//       <AlertDialo