import PropTypes from "prop-types";

export default function Button({
  children,
  onClick,
  className,
  type,
  disabled,
}) {
  return (
    <div>
      <button
        className={className}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

const ButtonType = PropTypes.oneOf(["button", "submit", "reset"]);
Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: ButtonType,
  disabled: PropTypes.bool,
};
