import { customRender } from "../../utils/testUtils";
import Home from "./Home";

export default describe("Home Page", () => {
  it("Renders", () => {
    const { container } = customRender(<Home />);
    expect(container).toMatchSnapshot();
  });
});
