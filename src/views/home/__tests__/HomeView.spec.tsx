import { render } from "@testing-library/react";
import HomeView from "../HomeView";

export default describe("HomeView", () => {
  it("Renders", () => {
    const { container } = render(<HomeView />);

    expect(container).toMatchSnapshot();
  });
});
