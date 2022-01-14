import classname from "classnames";
import "./Button.scss";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button" | "reset";
}

const ROOT_CLASSNAME = "button";

const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  label,
  onClick,
  type = "button",
}) => {
  //classname allows us to combine multiple classes
  const rootClasses = classname(className, ROOT_CLASSNAME);

  return (
    <button
      className={rootClasses}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
