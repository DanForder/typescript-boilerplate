import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

export const customRender = (
  ui: JSX.Element,
  options = { useRouting: true }
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

// const AllTheProviders = ({ children }: { children: any }) => {
//   return <BrowserRouter>{children}</BrowserRouter>;
// };

// const customRender = (ui: any, options: any) =>
//   render(ui, { wrapper: AllTheProviders, ...options });
