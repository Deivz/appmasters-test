import { MouseEventHandler } from "react";
import { MdTune } from "react-icons/md";
import { ButtonContainer } from "./FilterButton.styles";

interface FilterButtonProps {
  event: MouseEventHandler<HTMLDivElement>;
}

export default function FilterButton({ event }: FilterButtonProps) {
  return (
    <ButtonContainer onClick={event}>
      <span style={{ fontSize: '1.3rem' }}><MdTune /></span>
      <p>Filtros</p>
    </ButtonContainer>
  )
}