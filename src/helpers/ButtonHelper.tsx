import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  icon?: IconProp;
  text: string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  color,
  size = "medium",
  className,
  icon,
  text,
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <span>{text}</span>
      {icon && <FontAwesomeIcon icon={icon} className="ml-2" />}
    </button>
  );
};

export default Button;
