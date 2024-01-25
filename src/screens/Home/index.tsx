import React, { useEffect, useState } from "react";
import { Container, List, Title } from "./styled";
import { api } from "../../services/api";
import { ScrollView, Text } from "react-native";
import { CardPerson } from "../../components/CardPerson";
import axios from "axios";
import { InputSearch } from "../../components/InputSearch";

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

export function Home() {
  const [person, setPerson] = useState<ResponsePerson>({});
  const [page,setPage] = useState(1)




  
  useEffect(() => {
    async function getPerson() {
      const response = await api.get(`/character?page=${page}`);

      if(page > 1){
        const cloneResponse = person.results.concat(response.data.results)
        setPerson({info:response.data.info,results:cloneResponse});
        return;
      }
      setPerson(response.data);
    }

    getPerson();
  }, [page]);

  const updateList = async () => {
    if(person.info.next === null) return;
      

     setPage(prev=> prev + 1)

  }
  return (
    <Container>

      <InputSearch />
      <List
        data={person.results}
        keyExtractor={(item) => item.id}
        onEndReached={updateList}
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

    </Container>
  );
}
