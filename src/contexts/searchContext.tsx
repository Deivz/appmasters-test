import { FormEvent, createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

interface SearchContextProps {
   children: React.ReactNode;
}

interface SearchContextType {
   search: string | undefined;
   setSearch: (value: string | undefined) => void;
   find: (event: FormEvent) => void;
}

export const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export default function SearchContextProvider({ children }: SearchContextProps) {

   const navigate = useNavigate();
   const [search, setSearch] = useState<string>();

   function find(evento: FormEvent) {
      evento.preventDefault();
      navigate('/games');
   }

   return (
      <SearchContext.Provider value={{ search, find, setSearch }}>
         {children}
      </SearchContext.Provider>
   );
}