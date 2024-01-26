import { useNavigation } from "@react-navigation/native";
import {Container,Image, Content,Name, Status, Species,Gender,Location} from "./styled"
import { memo, useCallback } from "react";
import { PersonProps } from "../../utils/types";


export const CardPerson = memo((props: PersonProps) => {
  const navigation = useNavigation();

  const handleNavigationDetails = useCallback(() => {
    navigation.navigate('DetailsPerson', props) ;
  },[])

  return (
    <Container onPress={handleNavigationDetails}>
    <Image source={{uri: props.image}} />
    <Content>
    <Name>{props.name}</Name>
     <Status> Status: {props.status}</Status>
     <Species>Species: {props.species}</Species>
     <Gender>Gender: {props.gender}</Gender>
     <Location>Location: {props.location.name}</Location>
    </Content>
  </Container>
  )
})

