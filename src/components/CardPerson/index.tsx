import {Container,Image, Content,Name, Status, Species,Gender,Location} from "./styled"

interface CardPersonProps {
  name: string;
  image: string
  status: string;
  species:string;
  gender: string;
  location: string

}

export function CardPerson({name,image,status,species,gender,location}:CardPersonProps){
  return (
    <Container>
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