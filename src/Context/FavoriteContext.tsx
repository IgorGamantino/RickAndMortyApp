import { createContext, useState } from "react";



export const FavoriteContext = createContext({} as FavoriteContextProp);

interface FavoriteContextProp {
  favorites: number[]
  setFavorites:React.Dispatch<React.SetStateAction<number[]>>
}

export const FavoriteProvider = ({children}:{children:React.ReactNode}) => {
 const [favorites, setFavorites ]= useState<number[]>([])

  return (
    <FavoriteContext.Provider value={{favorites, setFavorites}}>
       {children}
    </FavoriteContext.Provider>
  )
}