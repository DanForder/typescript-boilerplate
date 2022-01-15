import { customRender } from "../../utils/testUtils";
import User from "./User";

export default describe("User Page", () => {
  it("Renders component in loading state", () => {
    const { container } = customRender(<User />);
    expect(container).toMatchSnapshot();
  });

  //TODO: Add mock data to show component with data
});
