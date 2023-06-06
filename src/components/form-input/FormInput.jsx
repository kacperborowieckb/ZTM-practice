import { FormInputLabel, Input, Group } from './form-input.styles.jsx';

const FormInput = ({ label, labelFor, ...otherProps }) => {
  return (
    <Group className="group">
      <Input className="form-input" {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length} htmlFor={labelFor}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
