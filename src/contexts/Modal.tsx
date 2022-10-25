import React, { createContext, useState } from 'react';
import { Modal } from '../components/Modal';

type impHandleOpenModal = {
  title: string;
  description?: string;
  element: JSX.Element;
};

type ModalPros = {
  isOpen: boolean;
  closeModal: () => void;
  handleOpenModal: (args: impHandleOpenModal) => void;
};

const ModalEmpty = () => <div />;

const ModalContext = createContext<ModalPros>({} as ModalPros);

const ModalProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(ModalEmpty);
  const [description, setDescription] = useState<string | undefined>('');

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleOpenModal = ({
    description,
    title,
    element,
  }: impHandleOpenModal) => {
    setTitle(title);
    setDescription(description);
    setModal(element);
    setIsOpen(true);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        closeModal,
        handleOpenModal,
      }}
    >
      {isOpen && (
        <Modal
          element={modal}
          close={closeModal}
          description={description}
          title={title}
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
