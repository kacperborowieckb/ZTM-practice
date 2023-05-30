import SignUpForm from '../../components/sign-up-form/SignUpForm';
import { signInWithGooglePopup } from '../../utils/firebase/firebase';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase';

const SignIn = () => {
  const logInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logInWithGoogle}>log in</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
