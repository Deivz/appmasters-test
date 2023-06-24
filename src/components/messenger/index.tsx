import styles from './messenger.module.css'; 

interface MessengerProps {
  message: string;
}

export default function Messenger({message}: MessengerProps) {
  return (
    <span className={styles.messenger}>{message}</span>
  )
}
