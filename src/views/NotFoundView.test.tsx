import { customRender } from "../testUtils";
import NotFoundView from "./NotFoundView";

export default describe("NotFoundView", () => {
  it("Renders", () => {
    const { container } = customRender(<NotFoundView />);

    expect(container).toMatchSnapshot();
  });
});
