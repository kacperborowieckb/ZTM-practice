import SignInForm from '../../components/sign-in-form copy/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
import './authentication.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
