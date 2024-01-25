import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Title,
  Image,
  Icon,
  Favorite,
  TopHeader,
  About,
  TitleAbout,
  Name,
  Divider,
  Gender,
  Species,
  Status,
  Location,
  Origin,
  EpisodeContainer,
  TitleEpisode,
  EpisodeContent,
  NameEpisode,
  ContainerNameEpisodeAndImg,
  ImageEpisode,
} from "./styled";
import { api } from "../../services/api";
import { EpisodeDetails } from "../../components/EpisodeDetais";
import { ImageCharacterDetails } from "../../components/ImageCharacterDetails";

const person = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51",
  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z",
};
export function DetailsPerson() {
  const [person,setPerson] = useState({})
  const [episodes,setEpisodes] = useState([])
  const [characters, setCharacters] = useState([])

  useEffect(() => {
   async function getDetailsPerson() {

    const response =  await api.get("character/1")

    const pattern = /\/episode\/(\d+)$/;
    

    const numbersAfterEpisodes = response.data.episode?.map(url => url.match(pattern)[1]).map(number => Number(number));
  

    const responseEpisodes = await api.get(`episode/${numbersAfterEpisodes}`)


    setEpisodes(responseEpisodes.data)
    setPerson(response.data)
   }

   getDetailsPerson()
  }, [])

 
  return (
    <Container>
      <Header>
        <TopHeader>
          <Icon>{"<=="}</Icon>
          <Favorite>{"<3"}</Favorite>
        </TopHeader>
        <Title>{person.name} Details </Title>
        <Image source={{ uri: person.image }} />
      </Header>

      <About>
        <TitleAbout>About</TitleAbout>
        <Divider />
        <Name>Name: {person.name}</Name>
        <Origin>Origin: {person.origin?.name}</Origin>
        <Status>Status: {person.status}</Status>
        <Species>Species: {person.species}</Species>
        <Gender>Gender: {person.gender}</Gender>
        <Location>Location: {person.location?.name}</Location>
      </About>

      <EpisodeContainer>
        <TitleEpisode>Episodes</TitleEpisode>
        <Divider />
      
      <EpisodeContent>
        {episodes.map((episode,index) => {
            return (
              <ContainerNameEpisodeAndImg key={index}>
              <NameEpisode>Episode Name:  {episode.name}-{episode.episode}</NameEpisode>

              <ImageCharacterDetails characters={episode.characters} />
              <Divider />
              </ContainerNameEpisodeAndImg>
            )

        }
            )}
      </EpisodeContent>
      </EpisodeContainer>
    </Container>
  );
}
