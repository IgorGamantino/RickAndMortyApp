import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Container, List, Title } from "./styled";
import { api } from "../../services/api";
import { CardPerson } from "../../components/CardPerson";
import { FavoriteContext } from "../../Context/FavoriteContext";


interface PersonProps {
  name: string;
  id: number;
  species: string;
  gender: string;
  image: string;
  status: string;
  episode: string[];
  location: {
    name: string;
  };
}

export function Favorite() {
  const [person, setPerson] = useState<PersonProps[]>({});
  const {favorites} = useContext(FavoriteContext)




  useEffect(() => {
    async function getPerson() {
      if (favorites) {

        const response = await api.get(`/character/${favorites}`);


          if(favorites.length === 1){
            setPerson([response.data]);
            return;
          }
        setPerson(response.data);
      }
    }

    getPerson();
  }, [favorites]);
  
  return (
    <Container>
      {favorites.length <=0 && <Title>Você não possui nenhum favorito!</Title>}
     {favorites.length > 0 && (
      <List
      data={person}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: PersonProps }) => {
        return (
          <CardPerson
            id={item.id}
            episodes={item.episode}
            key={item.id}
            species={item.species}
            status={item.status}
            gender={item.gender}
            location={item.location.name}
            name={item.name}
            image={item.image}
          />
        );
      }}
    />
     )}
    </Container>
  );
}
