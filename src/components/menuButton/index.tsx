import { MenuButtonContainer } from "./MenuButton.styles";

interface MenuButtonProps {
  active: boolean;
  event: () => void;
}

export default function MenuButton({ active, event }: MenuButtonProps) {
  return (
    <MenuButtonContainer>
      <div className={active ? 'change' : ''} onClick={event}>
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>
    </MenuButtonContainer>
  )
}