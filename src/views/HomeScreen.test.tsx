import { render } from "@testing-library/react";
import HomeScreen from "./HomeScreen";

export default describe("HomeScreen", () => {
  it("Renders", () => {
    const { container } = render(<HomeScreen />);

    expect(container).toMatchSnapshot();
  });
});
