import Modal from 'react-modal';
import { CustomModalContent } from '../../styles/components/CustomModal.styles';
import { ButtonContainer } from '../../styles/components/Button.styles';

interface CustomModalProps {
  dialog?: boolean;
  text: string;
  title?: string;
  modalState: boolean;
  modalDispatcher: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirmFunction?: () => void;
}

export default function CustomModal({ dialog = false, text, title, modalState, modalDispatcher, onConfirmFunction }: CustomModalProps) {

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      backgroundColor: 'white',
      height: '20rem',
      inset: '20px',
      marginBottom: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      maxWidth: '23rem'
    },
  };

  return (
    <Modal
      isOpen={modalState}
      onRequestClose={() => modalDispatcher(false)}
      style={customStyles}
    >
      {
        dialog
        ?
          <CustomModalContent>
            <div className='dialog'>
              <h4>{text}</h4>
              <div className='close'>
                <ButtonContainer>
                  <input type='button' value='Fechar' onClick={() => modalDispatcher(false)} />
                </ButtonContainer>
              </div>
            </div>
          </CustomModalContent>
        :
          <CustomModalContent>
            <h4>{title}</h4>
            <div className='actions'>
              <h4>{text}</h4>
              <div className='buttons'>
                <ButtonContainer small={true}>
                  <input type='button' value='Não' onClick={() => modalDispatcher(false)} />
                </ButtonContainer>
                <ButtonContainer small={true}>
                  <input
                    type='button'
                    value='Sim'
                    onClick={() => {
                      modalDispatcher(false);
                      if(onConfirmFunction){
                        onConfirmFunction();
                      }
                    }}
                  />
                </ButtonContainer>
              </div>
            </div>
          </CustomModalContent>
      }
    </Modal>
  )
}
