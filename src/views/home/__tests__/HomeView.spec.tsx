import { customRender } from "../../../utils/testUtils";
import HomeView from "../HomeView";

export default describe("HomeView", () => {
  it("Renders", () => {
    const { container } = customRender(<HomeView />);

    expect(container).toMatchSnapshot();
  });
});
