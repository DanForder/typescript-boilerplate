import { render } from "@testing-library/react";
import NotFoundScreen from "./NotFoundScreen";

export default describe("NotFoundScreen", () => {
  it("Renders", () => {
    const { container } = render(<NotFoundScreen />);

    expect(container).toMatchSnapshot();
  });
});
