import { createContext, useState } from "react";

interface MenuContextProps {
   children: React.ReactNode;
}

interface MenuContextType {
   active: boolean;
   setActive: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export default function MenuContextProvider({ children }: MenuContextProps) {

  const [active, setActive] = useState<boolean>(false);

  if(active){
    document.body.classList.add('menuOpen');
  } else {
    document.body.classList.remove('menuOpen');
  }

   return (
      <MenuContext.Provider value={{ active, setActive }}>
         {children}
      </MenuContext.Provider>
   );
}