// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{useState, useEffect} from "react";
import{ref, onValue, getDatabase,set, push} from "firebase/database";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, onIdTokenChanged, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCozThxPApmqASiVVkFBgYgcZRO5hkP1E",
  authDomain: "holler-8e6d5.firebaseapp.com",
  projectId: "holler-8e6d5",
  storageBucket: "holler-8e6d5.appspot.com",
  messagingSenderId: "1086848005499",
  appId: "1:1086848005499:web:b674eba4eb9882a696f9de",
  measurementId: "G-ZL9LL8DJNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);
//export const storage = getStorage(app);

//GET request (get the data from firebase)
//path = '/book-sales'
//transform is not necessary
//return a JSON object
export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
  
    useEffect(() => {
      const dbRef = ref(database, path);
      const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
      if (devMode) { console.log(`loading ${path}`); }
      return onValue(dbRef, (snapshot) => {
        const val = snapshot.val();
        if (devMode) { console.log(val); }
        setData(transform ? transform(val) : val);
        setLoading(false);
        setError(null);
      }, (error) => {
        setData(null);
        setLoading(false);
        setError(error);
      });
    }, [path, transform]);
  
    return [data, loading, error];
  };

  //POST request (add stuff to the database)
  export const addData = (path, value) =>{
    push(ref(database, path), value);
  }

  //PATCH request (change stuff in the database)
  export const setData = (path, value) => (
    set(ref(database, path), value)
  );

  export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
  };
 
const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useUserState = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    onIdTokenChanged(getAuth(firebase), setUser);
  }, []);

  return [user];
};

