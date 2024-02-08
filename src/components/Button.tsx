import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "danger" | "secondary" | "success";
  onClickButton: () => void;
}

const Button = ({ children, onClickButton, color }: ButtonProps) => {
  return (
    <button
      type="button"
      className={"btn btn-" + color}
      onClick={() => {
        onClickButton();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
