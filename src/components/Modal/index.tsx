import {
  Close,
  ContainerModal,
  ContentModal,
  DescriptionModal,
  TitleModal,
  WrapperModal,
} from './styles';
import { ModalPros } from './types';

const Modal = ({ close, description, title, element }: ModalPros) => {
  return (
    <ContainerModal>
      <WrapperModal>
        <Close>
          <img
            onClick={close}
            src="/images/icons/close.png"
            alt="Fechar Modal"
          />
        </Close>
        <ContentModal>
          <TitleModal>
            <h2>{title}</h2>
          </TitleModal>
          <DescriptionModal>
            {description && <p>{description}</p>}
          </DescriptionModal>
          {element}
        </ContentModal>
      </WrapperModal>
    </ContainerModal>
  );
};
export { Modal };
