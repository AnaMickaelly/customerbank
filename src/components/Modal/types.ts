export type ModalPros = {
  title: string;
  description?: string;
  close?: () => void;
  element: JSX.Element;
};
