import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { ClientForm } from './forms/ClientForm';

interface AddClientModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export const AddClientModal: React.FC<AddClientModalProps> = ({ open, onOpenChange, onSuccess }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Crear Nuevo Cliente</DialogTitle>
        </DialogHeader>
        <ClientForm onSuccess={() => {
          onSuccess();
          onOpenChange(false);
        }} />
      </DialogContent>
    </Dialog>
  );
};
