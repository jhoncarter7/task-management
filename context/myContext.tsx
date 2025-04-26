'use client';

import { Task } from '@/lib/types';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

interface ModalContextType {
    edit?: boolean;
    setEdit?: (value: boolean) => void;
    openModel?: boolean;
    setOpenModel?: (value: boolean) => void;
    task?: Task[],
    setTask?:  Dispatch<SetStateAction<Task[]>>;
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
  const [task, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "groceries",
      description:
        "buy some groceries",
      dueDate: "2024-09-12",
      status: "completed",
      priority: "medium",
    },
    {
      id: 2,
      title: "Doing DSA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
      dueDate: "2024-09-15",
      status: "in-progress",
      priority: "high",
    },
  ]);
  return (
    <ModalContext.Provider value={{ edit, setEdit, openModel, setOpenModel, task, setTask }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModal = () => useContext(ModalContext);
