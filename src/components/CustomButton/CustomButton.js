import "./CustomButton.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const CustomButton = ({
  children,
  classes,
  btnType,
  disabled,
  ...otherProps
}) => {
  return (
    <button
      className={`custom-button ${BUTTON_TYPE_CLASSES[btnType]} ${classes}`}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
