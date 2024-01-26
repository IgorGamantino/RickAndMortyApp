import { useContext, useState } from "react";
import {
  ButtonSearch,
  Container,
  Description,
  Input,
  TextButton,
  WrapperInputAndButton,
} from "./styled";
import RNPickerSelect from "react-native-select-dropdown";
import { FilterSearchContext } from "../../Context/FilterSearchContext";
import { api } from "../../services/api";
export function InputSearch() {
  const { input, setInput, setSelect, select ,setPerson} =
    useContext(FilterSearchContext);
  const filtersSearch = [
    "name",
    "status",
    "species",
    "gender",
  ];
  const status = ["alive", "dead", "unknown"];
  const gender = ["female", "male", "genderless", "unknown"];
  const [otherSelect, setOtherSelect] = useState("");

  const filters = ["status", "gender"];
  const isError = select.length <= 0;
  const handleSearch = async () => {
    if(select === "name"){
      const response =  await api.get(`/character/?name=${input}`);
      setPerson(response.data)
    }
    if(select === "gender"){
      const response =  await api.get(`/character/?gender=${otherSelect}`);
      setPerson(response.data)

    }
    if(select === "status"){
      const response =  await api.get(`/character/?status=${otherSelect}`);
      setPerson(response.data)
    }
    if(select === "species"){
      const response =  await api.get(`/character/?species=${input}`);
      setPerson(response.data)
    }
  };
  return (
    <Container>
      <RNPickerSelect
        buttonStyle={{
          backgroundColor: "#f0d276",
          width: "100%",
          borderRadius: 8,
          height: 40,
        }}
        defaultButtonText="Selecione o filtro que deseja buscar"
        data={filtersSearch}
        onSelect={(selectedItem) => setSelect(selectedItem)}
      />
      <WrapperInputAndButton>
        {!filters.includes(select) && (
          <Input
            onChangeText={setInput}
            value={input}
            placeholder="Pesquise pelo nome"
          />
        )}
        {filters.includes(select) && (
          <RNPickerSelect
            buttonStyle={{
              backgroundColor: "#f0d276",
              width: "78%",
              borderRadius: 8,
              height: 40,
            }}
            disabled={select.length <= 0}
            defaultButtonText={`Selecione o tipo do ${select}`}
            data={select === "status" ? status : gender}
            onSelect={(selectedItem) => setOtherSelect(selectedItem)}
          />
        )}
        <ButtonSearch onPress={handleSearch} disabled={isError}>
          <TextButton>Pesquisar</TextButton>
        </ButtonSearch>
      </WrapperInputAndButton>
      {select.length <= 0 && (
        <Description>
          Selecione primeiro o tipo do filtro depois e coloque o nome
        </Description>
      )}
    </Container>
  );
}
