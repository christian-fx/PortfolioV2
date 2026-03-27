import { createContext, useState, useContext } from 'react';
import ContactModal from '../components/ContactModal';

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{
      isContactModalOpen,
      openContactModal: () => setContactModalOpen(true),
      closeContactModal: () => setContactModalOpen(false)
    }}>
      {children}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setContactModalOpen(false)} />
    </ModalContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useModal() {
  return useContext(ModalContext);
}
