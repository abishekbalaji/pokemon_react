import "./FormInput.scss";

const FormInput = ({ label, classes, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className={`form-input ${classes}`} {...otherProps} />
      {label && (
        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
