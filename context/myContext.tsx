'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

interface ModalContextType {
    edit?: boolean;
    setEdit?: (value: boolean) => void;
    openModel?: boolean;
    setOpenModel?: (value: boolean) => void;
  }
  
const ModalContext = createContext<ModalContextType>({
  edit: false,
  openModel: false
});
interface ModalProviderProps {
    children: ReactNode;
  }

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [openModel, setOpenModel] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ edit, setEdit, openModel, setOpenModel }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => useContext(ModalContext);
