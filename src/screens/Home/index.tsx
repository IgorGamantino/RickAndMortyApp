import React, { useContext, useEffect, useState } from "react";
import { Container } from "./styled";
import { api } from "../../services/api";
import { FlatList, ListRenderItem } from "react-native";
import { CardPerson } from "../../components/CardPerson";
import { InputSearch } from "../../components/InputSearch";
import { FilterSearchContext } from "../../Context/FilterSearchContext";
import { PersonProps } from "../../utils/types";

export function Home() {
  const [page, setPage] = useState(1);
  const { person, setPerson } = useContext(FilterSearchContext);

  useEffect(() => {
    async function getPerson() {
      const response = await api.get(`/character?page=${page}`);

      if (page > 1) {
        const cloneResponse = person.results.concat(response.data.results);
        setPerson({ info: response.data.info, results: cloneResponse });
        return;
      }
      setPerson(response.data);
    }

    getPerson();
  }, [page]);

  const updateList = async () => {
    if (person.info.next === null) return;

    setPage((prev) => prev + 1);
  };

  const renderItem: ListRenderItem<PersonProps> = ({ item }) => {
    return (
      <CardPerson
        id={item.id}
        episode={item.episode}
        key={item.id}
        species={item.species}
        status={item.status}
        gender={item.gender}
        location={item.location}
        name={item.name}
        image={item.image}
      />
    );
  };

  return (
    <Container>
      <InputSearch />
      <FlatList
        data={person.results}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={person.info && updateList}
        renderItem={renderItem}
      />
    </Container>
  );
}
