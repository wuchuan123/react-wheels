import React, { useEffect } from 'react';
import { ModalTransition } from '@/Modal/hooks/useModalTransition';
import { useModalContext } from '@/Modal/hooks/useModalContext';
import { ModalContainer } from '@/Modal/components/ModalContainer';
import ReactDOM from 'react-dom';

export interface ModalProps {
  id: string;
  isOpen: boolean;
  onBackdropClick?: () => void;
  footer?: React.ReactNode;
  transition?: ModalTransition;
  modalClassName?: string;
}

function hasDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}

export const Modal: React.FC<ModalProps> = modal => {
  const { addOrUpdate, remove, getStaggerPixels } = useModalContext();
  const { id, isOpen } = modal;
  const container = hasDOM()
    ? document.getElementById('react-simple-modal-container')
    : null;
  useEffect(() => {
    isOpen ? addOrUpdate(id) : remove(id);
    return () => remove(id);
  }, [id, isOpen]);

  return container
    ? ReactDOM.createPortal(
        <ModalContainer transformDistance={getStaggerPixels(id)} {...modal} />,
        container,
      )
    : null;
};
