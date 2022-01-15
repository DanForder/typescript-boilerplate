import { customRender } from "../../utils/testUtils";
import Users from "./Users";

export default describe("Users Page", () => {
  it("Renders component in loading state", () => {
    const { container } = customRender(<Users />);
    expect(container).toMatchSnapshot();
  });

  //TODO: Add mock data to show component with data
});
