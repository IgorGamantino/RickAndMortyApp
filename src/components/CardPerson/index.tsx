import { useNavigation } from "@react-navigation/native";
import {Container,Image, Content,Name, Status, Species,Gender,Location} from "./styled"

interface CardPersonProps {
  id:  number;
  name: string;
  image: string
  status: string;
  species:string;
  gender: string;
  location: string;
  episodes: string[];
}

export function CardPerson({name,image,status,species,gender,location,episodes,id}:CardPersonProps){
 const navigation = useNavigation();



 const handleNavigationDetails = () => {
  navigation.navigate("DetailsPerson",{
    image,
    status,
    species,
    gender,
    location,
    name,
    episodes,
    id
  })
    
 }


  return (
    <Container onPress={handleNavigationDetails}>
    <Image source={{uri: image}} />
    <Content>
    <Name>{name}</Name>
     <Status> Status: {status}</Status>
     <Species>Species: {species}</Species>
     <Gender>Gender: {gender}</Gender>
     <Location>Location: {location}</Location>
    </Content>
  </Container>
  )
}