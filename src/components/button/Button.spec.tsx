import { fireEvent, screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import Button from "./Button";

export default describe("Button", () => {
  const mockOnClick = jest.fn();
  const labelText = "Button Label";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders", () => {
    const { container } = customRender(<Button label={labelText} />);

    expect(container).toMatchSnapshot();
  });

  it("Doesn't call onClick when disabled", () => {
    customRender(<Button onClick={mockOnClick} label={labelText} disabled />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("Calls onClick when enabled", () => {
    customRender(<Button onClick={mockOnClick} label={labelText} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
