import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Header,
  Image,
  About,
  TitleAbout,
  Name,
  Divider,
  Gender,
  Species,
  Status,
  Location,
  EpisodeContainer,
  TitleEpisode,
  EpisodeContent,
  NameEpisode,
  ContainerNameEpisodeAndImg,
  ButtonGoBack,
  ButtonFavorite,
} from "./styled";
import { api } from "../../services/api";
import { ImageCharacterDetails } from "../../components/ImageCharacterDetails";
import { useRoute } from "@react-navigation/native";
import ArrowLogo from "../../assets/arrow-left.svg"
import HeartLogo from "../../assets/heart.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoriteContext } from "../../Context/FavoriteContext";
export function DetailsPerson({navigation}) {

  const [episodes, setEpisodes] = useState<any[]>([]);

const {favorites, setFavorites}= useContext(FavoriteContext)
  const router = useRoute();

  useEffect(() => { 
    async function getStorage() {
      const item =  await AsyncStorage.getItem("idsFavorites");
        if(item){
          setFavorites(JSON.parse(item))
        }
    }

    getStorage()

  },[])

  const isFavorite =  favorites?.includes(router.params?.id)
  useEffect(()=> {
      async function loadHeader  (){
        navigation.setOptions({
          headerTitle:`Details ${router.params?.name}`,
          headerLeft: () => <ButtonGoBack onPress={() =>navigation.goBack()}><ArrowLogo width={20} height={20} /></ButtonGoBack>,
          headerRight: () => <ButtonFavorite onPress={() => handleFavoritePerson()}><HeartLogo  width={20} height={20} fill={isFavorite ? "red" : "white"} /></ButtonFavorite>
        })
      }

      loadHeader()

  },[favorites])


  const handleFavoritePerson = async() => {
      if(favorites){
        const isFavorite =favorites?.find(id => id === router.params?.id)
      if(isFavorite){
        const removeFavorite = favorites.filter(id=> id !== router.params.id)
        setFavorites(removeFavorite)
        await AsyncStorage.setItem("idsFavorites",JSON.stringify(removeFavorite))

        return;
      }

      if(favorites?.length > 0){
        let newItems = [...favorites, Number(router.params?.id)]
        setFavorites(newItems)
        await AsyncStorage.setItem("idsFavorites",JSON.stringify(newItems))
        return;
      }
      }

      setFavorites([router.params?.id])
      await AsyncStorage.setItem("idsFavorites", JSON.stringify([router.params?.id]))
  }

  useEffect(() => {
    async function getDetailsPerson() {
      const pattern = /\/episode\/(\d+)$/;

      const numbersAfterEpisodes = router.params?.episodes
        .map((url) => url.match(pattern)[1])
        .map((number) => Number(number));


      const responseEpisodes = await api.get(`episode/${numbersAfterEpisodes}`);

      if(responseEpisodes.data.length > 1) {
        setEpisodes(responseEpisodes.data);
        return;
      }
        const newArray = [responseEpisodes.data]
        setEpisodes(newArray)
    }
    getDetailsPerson();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={{ uri: router.params?.image }} />
      </Header>

      <About>
        <TitleAbout>About</TitleAbout>
        <Divider />
        <Name>Name: {router.params?.name}</Name>
        <Status>Status: {router.params?.status}</Status>
        <Species>Species: {router.params?.species}</Species>
        <Gender>Gender: {router.params?.gender}</Gender>
        <Location>Location: {router.params?.location}</Location>
      </About>

      <EpisodeContainer>
        <TitleEpisode>Episodes</TitleEpisode>
        <Divider />

        <EpisodeContent>
          {episodes?.map((episode) => {
            return (
              <ContainerNameEpisodeAndImg key={episode.id}>
                <NameEpisode>
                  Episode name: {episode.name} - {episode.episode}
                </NameEpisode>

                <ImageCharacterDetails characters={episode.characters} />
                <Divider />
              </ContainerNameEpisodeAndImg>
            );
          })}
        </EpisodeContent>
      </EpisodeContainer>
    </Container>
  );
}
