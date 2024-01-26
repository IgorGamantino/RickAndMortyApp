export interface PersonProps {
  id:  number;
  name: string;
  image: string
  status: string;
  species:string;
  gender: string;
  location: {
    name: string;
  }
  episode: string[];
}


export type RootStackParamList = {
  Home: undefined;
  DetailsPerson: PersonProps
}

export interface EpisodesProps {
  id: number;
  name: string;
  image: string;
  episode: string;
  characters: string[];
}