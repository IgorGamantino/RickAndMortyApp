import { render, screen, fireEvent } from "@testing-library/react-native";
import { CardPerson } from ".";
import { PersonProps } from "../../utils/types";
import { NavigationContainer } from "@react-navigation/native";
describe("Component: CardPerson", () => {
  const personProps: PersonProps = {
    name: "Jonh Doe",
    id: 1,
    gender: "man",
    status: "live",
    species: "human",
    location: {
      name: "Heart",
    },
    image: "https://image.flaticon.com/icons/svg/723/723894.svg",
    episode: ["test"],
  };

  jest.mock("@react-navigation/native", () => ({
    useNavigation: () => ({ navigate: mockedNavigate }),
  }));

  const mockedNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should be render correctly component", () => {
    render(<CardPerson {...personProps} />, { wrapper: NavigationContainer });

    const namePerson = screen.getByText(/jonh doe/i);
    expect(namePerson).toBeTruthy();
  });

  // it("it should be a navigation to another screen without onPress on the container", () => {
  //   const { debug } = render(<CardPerson {...personProps} />, {
  //     wrapper: NavigationContainer,
  //   });

  //   const container = screen.getByTestId("button-navigation");

  //   debug();

  //   expect(mockedNavigate).toHaveBeenCalled();
  // });
});
