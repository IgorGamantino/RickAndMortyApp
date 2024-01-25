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
  ButtonGoBack,
  ButtonFavorite,
} from "./styled";
import { api } from "../../services/api";
import { ImageCharacterDetails } from "../../components/ImageCharacterDetails";
import { useRoute } from "@react-navigation/native";
import ArrowLogo from "../../assets/arrow-left.svg"
import HeartLogo from "../../assets/heart.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
export function DetailsPerson({navigation}) {

  const [episodes, setEpisodes] = useState<any[]>([]);
const [favorite,setFavorite] = useState<number[]>([])
  const router = useRoute();


  useEffect(() => { 
    async function getStorage() {
      const item =  await AsyncStorage.getItem("idsFavorites");
        if(item){
          setFavorite(JSON.parse(item))
        }
    }

    getStorage()

  },[])

  const isFavorite =  favorite?.includes(router.params?.id)
  useEffect(()=> {
      async function loadHeader  (){
        navigation.setOptions({
          headerTitle:`Details ${router.params?.name}`,
          headerLeft: () => <ButtonGoBack onPress={() =>navigation.goBack()}><ArrowLogo width={20} height={20} /></ButtonGoBack>,
          headerRight: () => <ButtonFavorite onPress={() => handleFavoritePerson()}><HeartLogo  width={20} height={20} fill={isFavorite ? "red" : "white"} /></ButtonFavorite>
        })
      }

      loadHeader()

  },[favorite])


  const handleFavoritePerson = async() => {
      if(favorite){
        const isFavorite =favorite?.find(id => id === router.params?.id)
      if(isFavorite){
        const removeFavorite = favorite.filter(id=> id !== router.params.id)
        setFavorite(removeFavorite)
        await AsyncStorage.setItem("idsFavorites",JSON.stringify(removeFavorite))

        return;
      }

      if(favorite?.length > 0){
        let newItems = [...favorite, Number(router.params?.id)]
        setFavorite(newItems)
        await AsyncStorage.setItem("idsFavorites",JSON.stringify(newItems))
        return;
      }
      }

      setFavorite([router.params?.id])
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
