import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

interface CustomRenderOptions {
  useRouting: boolean;
}

export const customRender = (
  ui: JSX.Element,
  options: CustomRenderOptions = {
    useRouting: true,
  }
) => {
  let uiResult = ui;

  if (options.useRouting) {
    uiResult = wrapWithRouting(ui);
  }

  return render(uiResult);
};

const wrapWithRouting = (ui: JSX.Element): JSX.Element => {
  return <BrowserRouter>{ui}</BrowserRouter>;
};
