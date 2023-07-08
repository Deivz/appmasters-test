import { MessengerContainer } from './Messenger.styles';

interface MessengerProps {
  message: string;
}

export default function Messenger({message}: MessengerProps) {
  return (
    <MessengerContainer>
      {message}
    </MessengerContainer>
  )
}
