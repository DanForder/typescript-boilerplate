import { customRender } from "../../../utils/testUtils";
import Layout from "../Layout";

export default describe("Layout", () => {
  it("Renders without children", () => {
    const { container } = customRender(<Layout />);

    expect(container).toMatchSnapshot();
  });

  it("Renders with children", () => {
    const { container } = customRender(
      <Layout>
        <span>Child element</span>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });

  it("Renders with exampleProp enabled, no children", () => {
    const { container } = customRender(<Layout exampleProp />);

    expect(container).toMatchSnapshot();
  });

  it("Renders with exampleProp enabled, children", () => {
    const { container } = customRender(
      <Layout exampleProp>
        <span>Child element</span>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
