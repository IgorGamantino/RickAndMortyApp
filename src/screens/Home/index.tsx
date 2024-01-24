import React, { useEffect, useState } from "react"
import {Container,Title} from "./styled"
import { api } from "../../services/api"
import { ScrollView } from "react-native"
import { CardPerson } from "../../components/CardPerson"


interface ResponsePerson {
  name: string;
  id: number;
  species: string;
  gender:string;
  image: string;
  status: string;
  location: {
    name: string;
  }

}

export function Home () {
const [person,setPerson] = useState<ResponsePerson[]>([])
  useEffect(() => {
    async function getPerson () {
     const response = await api.get("/character")

    //  console.log(response.data.results[1])
     setPerson(response.data.results)
    }

    getPerson()
  },[])


  return (
    <Container>
      <Title>New Project</Title>
     
     <ScrollView>
       {person.map(person => (
        <CardPerson 
        key={person.id}
        species={person.species}
        status={person.status}
        gender={person.gender}
        location={person.location.name}
        name={person.name}
        image={person.image}
        />
       ))}
     </ScrollView>
    </Container>
  )
}