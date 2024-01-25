import { Container } from "./styled";
import RNPickerSelect from 'react-native-picker-select';
export function InputSearch() {
  return( 
    <Container>
      <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder="Selecione o que deseja filtrar"
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
    </Container>
  )
}