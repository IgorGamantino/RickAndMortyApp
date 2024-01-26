import { useEffect, useState } from "react";
import { Image } from "react-native";
import { api } from "../../services/api";
import { ContainerImg, Content, NamePerson } from "./styled";
import { EpisodesProps } from "../../utils/types";

interface EpisodeDetails {
  characters: string[];
}
export function ImageCharacterDetails({ characters }: EpisodeDetails) {
  const [charactersState, setCharactersState] = useState<EpisodesProps[]>([]);

  useEffect(() => {
    async function getCharacters() {
      const patternCharacters = /\/character\/(\d+)$/;
      const numbersAfterCharacters = characters
        ?.map((url) => (url.match(patternCharacters) || [])[1])
        .filter((match) => !!match)
        .map((number) => Number(number));

      const responseCharacter = await api.get(
        `character/${numbersAfterCharacters}`
      );

      setCharactersState(responseCharacter.data);
    }

    getCharacters();
  }, []);

  return (
    <ContainerImg horizontal showsHorizontalScrollIndicator={false}>
      {charactersState.map((character) => {
        return (
          <Content key={character.id}>
            <Image source={{ uri: character.image }} width={60} height={60} />
            <NamePerson>{character.name}</NamePerson>
          </Content>
        );
      })}
    </ContainerImg>
  );
}
