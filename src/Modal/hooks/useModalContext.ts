import { useContext } from 'react';
import { ModalContext, Context } from '@/Modal/ModalContext';

export const useModalContext = () => useContext<Context>(ModalContext);
