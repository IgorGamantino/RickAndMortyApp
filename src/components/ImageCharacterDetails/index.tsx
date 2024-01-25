import { useEffect, useState } from "react";
import { Image } from "react-native";
import { api } from "../../services/api";
import { ContainerImg, Content, Divider, NamePerson } from "./styled";


interface EpisodeDetails {
  characters: string[]
}
export function ImageCharacterDetails ({characters}:EpisodeDetails){


  const [charactersState, setCharactersState] = useState([])

  useEffect(() => {
 async function getCharacters() {
  const patternChareacters = /\/character\/(\d+)$/
  const numbersAfterCharecters = characters?.map(url => url.match(patternChareacters)[1]).map(number => Number(number));

  const responseCharacter =  await api.get(`character/${numbersAfterCharecters}`)


  setCharactersState(responseCharacter.data)

 }

 getCharacters()
  },[])



  return (
      <ContainerImg horizontal showsHorizontalScrollIndicator={false}>
        {charactersState.map(charac => 
        <Content key={charac.id}>
          <Image  source={{uri: charac.image}} width={60} height={60} />
          <NamePerson>{charac.name}</NamePerson>
         
        </Content>
        
        )}
      </ContainerImg>
  )
}