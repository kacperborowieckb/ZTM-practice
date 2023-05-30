import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './sign-up-form.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log('Err ' + err.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          labelFor="displayName"
          type="text"
          required
          id="displayName"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          labelFor="email"
          type="email"
          required
          id="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          labelFor="password"
          type="password"
          required
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <FormInput
          label="Confirm password"
          labelFor="confirmPassword"
          type="password"
          required
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
