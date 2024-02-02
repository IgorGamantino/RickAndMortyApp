import {render } from "@testing-library/react-native"
import { CardPerson } from "."
import { PersonProps } from "../../utils/types"

describe("Component: CardPerson", () => {
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


    render(<CardPerson {...personProps} />)
  })
})