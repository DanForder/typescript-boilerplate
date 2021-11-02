import { render } from "@testing-library/react";
import NotFoundScreen from "./NotFoundScreen";
import { BrowserRouter } from "react-router-dom";
import { customRender } from "../testUtils";

export default describe("NotFoundScreen", () => {
  it("Renders", () => {
    const { container } = customRender(<NotFoundScreen />);

    expect(container).toMatchSnapshot();
  });
});
