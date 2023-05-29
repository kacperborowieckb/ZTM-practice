import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyADdPjxMEYOirFfkYyJ7XlkU60ZYUqBu2w',
  authDomain: 'ztm-practice.firebaseapp.com',
  projectId: 'ztm-practice',
  storageBucket: 'ztm-practice.appspot.com',
  messagingSenderId: '1036912606608',
  appId: '1:1036912606608:web:0bf9b3516acb76a25a4715',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('Error: ' + err.message);
    }

    return userDocRef;
  }
};
