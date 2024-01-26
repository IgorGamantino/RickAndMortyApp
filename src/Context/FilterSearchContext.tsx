import { createContext, useState } from "react";

export const FilterSearchContext = createContext({} as FilterSearchContextProp);

interface InfoProps {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface PersonProps {
  name: string;
  id: number;
  species: string;
  gender: string;
  image: string;
  status: string;
  episode: string[]
  location: {
    name: string;
  };
}

interface ResponsePerson {
  info: InfoProps;
  results: PersonProps[];
}


interface FilterSearchContextProp {
  select: string
  setSelect:React.Dispatch<React.SetStateAction<string>>;
  input: string
  setInput:React.Dispatch<React.SetStateAction<string>>;
  person: ResponsePerson;
  setPerson: React.Dispatch<React.SetStateAction<ResponsePerson>>
}

export const FilterSearchProvider = ({children}:{children:React.ReactNode}) => {
  const [select,setSelect] = useState("");
  const [input,setInput] = useState("");
  const [person, setPerson] = useState<ResponsePerson>({} as ResponsePerson);
  
  return (
    <FilterSearchContext.Provider value={{select, setSelect,input,setInput,person,setPerson}}>
       {children}
    </FilterSearchContext.Provider>
  )
}