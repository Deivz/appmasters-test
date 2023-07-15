import { FormEvent, createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface GameSearchContextProps {
   children: React.ReactNode;
}

interface GameSearchContextType {
   find: (event: FormEvent) => void;
   searchGame: string | undefined;
   setSearchGame: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const GameSearch = createContext<GameSearchContextType>({} as GameSearchContextType);

export default function GameSearchContextProvider({ children }: GameSearchContextProps) {

   const navigate = useNavigate();
   const [searchGame, setSearchGame] = useState<string>();

   function find(evento: FormEvent) {
      evento.preventDefault();
      navigate('/');
   }

   return (
      <GameSearch.Provider value={{ find, searchGame, setSearchGame }}>
         {children}
      </GameSearch.Provider>
   );
}