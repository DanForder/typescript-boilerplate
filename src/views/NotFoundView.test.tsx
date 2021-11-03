import { render } from "@testing-library/react";
import NotFoundView from "./NotFoundView";
import { BrowserRouter } from "react-router-dom";
import { customRender } from "../testUtils";

export default describe("NotFoundView", () => {
  it("Renders", () => {
    const { container } = customRender(<NotFoundView />);

    expect(container).toMatchSnapshot();
  });
});
