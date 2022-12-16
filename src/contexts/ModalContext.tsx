import { createContext, useState } from "react";

interface iModalProps {
 handleModal: () => void;
  modalIsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalContext = createContext({} as iModalProps);

interface iModalProviderProps {
  children: React.ReactNode;
}

export function ModalProvider({ children }: iModalProviderProps) {
  const [modalIsOpen, setIsOpen] = useState(false);

 const handleModal = () => {
    if(modalIsOpen === false) {
        setIsOpen(true);
    }
    else{
        setIsOpen(false);
    }
  }

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, handleModal, setIsOpen }}
    >
      {children}
    </ModalContext.Provider>
  );
}
