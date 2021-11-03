import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

export default describe("Button", () => {
  const mockOnClick = jest.fn();
  const labelText = "Button Label";

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Renders", () => {
    const { container } = render(<Button label={labelText} />);

    expect(container).toMatchSnapshot();
  });

  it("Doesn't call onClick when disabled", () => {
    render(<Button onClick={mockOnClick} label={labelText} disabled />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("Calls onClick when enabled", () => {
    render(<Button onClick={mockOnClick} label={labelText} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockOnClick).toBeCalledTimes(1);
  });
});
