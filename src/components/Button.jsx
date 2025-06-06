import PropTypes from "prop-types";

// Size classes for the button
const sizeClasses = {
  large: "w-80 rounded-sm py-2 text-lg",
  medium: "w-36 rounded-sm py-2 text-lg",
};

// Variant classes for the button
const variantClasses = {
  primary:
    "bg-[var(--primary-color)] text-[var(--button-text-color)] hover:bg-[var(--button-hover-background-color)] transition-colors duration-300 cursor-pointer",
  secondary:
    "bg-[var(--background-color)] text-[var(--primary-color)] border-1 border-[var(--button-border-color)] hover:bg-[var(--button-hover-background-color)] hover:text-[var(--button-text-color)] transition-all duration-300 cursor-pointer ",
  mute: "bg-[var(--button-background-muted-color)] text-[var(--button-text-muted-color)]  ",
};

// Primary Button component
const Button = ({
  size = "medium",
  variant = "primary",
  children,
  // onClick,
}) => {
  return (
    <button
      className={`rounded-md font-semibold ${sizeClasses[size]} ${variantClasses[variant]}`}
      // onClick={onClick}
    >
      {children}
    </button>
  );
};

// type checking for the Button component
Button.propTypes = {
  size: PropTypes.oneOf(["large", "medium"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
