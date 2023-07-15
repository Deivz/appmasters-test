import {ReactNode} from 'react';
import { ButtonContainer } from "./ActionButton.styles";

interface FilterButtonProps {
  onClick: any;
  value: boolean;
  icon: ReactNode;
  text: string;
  order?: boolean;
}

export default function ActionButton({ onClick, value, icon, text, order = false }: FilterButtonProps) {

  const handleClick = () => {
    onClick(!value)
  }

  return (
    <ButtonContainer active={value} onClick={handleClick} order={order}>
      <span style={{ fontSize: '1.3rem' }}>{icon}</span>
      <p>{text}</p>
    </ButtonContainer>
  )
}