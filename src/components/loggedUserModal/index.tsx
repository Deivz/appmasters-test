import { useContext } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import { CustomModalContent } from '../../styles/components/CustomModal.styles';
import { ModalContext } from '../../contexts/ModalContext';
import { ButtonContainer } from '../../styles/components/Button.styles';

export default function LoggedUserModal() {

  const navigate = useNavigate();

  const { modalIsOpen, setModalIsOpen } = useContext(ModalContext);

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
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <CustomModalContent>
        <h4>É preciso de estar logado para favoritar e avaliar os jogos.</h4>
        <div className='actions'>
          <h4>Deseja realizar o login?</h4>
          <div className='buttons'>
            <ButtonContainer small={true}>
              <input type='button' value='Não' onClick={() => setModalIsOpen(false)} />
            </ButtonContainer>
            <ButtonContainer small={true}>
              <input
                type='button'
                value='Sim'
                onClick={() => {
                  setModalIsOpen(false);
                  navigate('/auth');
                }}
              />
            </ButtonContainer>
          </div>
        </div>
      </CustomModalContent>
    </Modal>
  )
}
