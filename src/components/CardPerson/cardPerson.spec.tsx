import {render ,screen} from "@testing-library/react-native"
import { CardPerson } from "."
import { PersonProps } from "../../utils/types"
import { NavigationContainer } from "@react-navigation/native";
describe("Component: CardPerson", () => {

  
  const mockedNavigate = jest.fn();

  jest.mock('@react-navigation/native', () => (
    { useNavigation: () => ({ navigate: mockedNavigate }) }));
  it("should be render correctly component" ,()=> {
  const personProps:PersonProps = {
    name: "Jonh Doe",
    id: 1,
    gender: "man",
    status: "live",
    species: "human",
    location: {
      name: "Heart",
    },
    image:  "https://image.flaticon.com/icons/svg/723/723894.svg",
    episode: ["test"]
  }


    render(<CardPerson {...personProps} />, {wrapper:NavigationContainer })

    const namePerson = screen.getByText(/jonh doe/i)
    expect(namePerson).toBeTruthy()
  })
})