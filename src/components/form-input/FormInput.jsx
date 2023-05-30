import './form-input.scss';

const FormInput = ({ label, labelFor, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
          htmlFor={labelFor}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
