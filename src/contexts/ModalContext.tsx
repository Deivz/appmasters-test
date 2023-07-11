import { createContext, useState } from "react";

interface ModalContextProps {
  children: React.ReactNode;
}

interface ModalContextType {
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);

export default function ModalContextProvider({ children }: ModalContextProps) {

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}