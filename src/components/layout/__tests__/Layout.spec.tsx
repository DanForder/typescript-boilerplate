import { render } from "@testing-library/react";
import Layout from "../Layout";

export default describe("Layout", () => {
  it("Renders without children", () => {
    const { container } = render(<Layout />);

    expect(container).toMatchSnapshot();
  });

  it("Renders with children", () => {
    const { container } = render(
      <Layout>
        <span>Child element</span>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders with exampleProp enabled, no children", () => {
    const { container } = render(<Layout exampleProp />);

    expect(container).toMatchSnapshot();
  });

  it("Renders with exampleProp enabled, children", () => {
    const { container } = render(
      <Layout exampleProp>
        <span>Child element</span>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
