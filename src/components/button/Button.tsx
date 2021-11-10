interface ButtonProps {
  disabled?: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  disabled,
  label,
  onClick,
  type = "button",
}) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
