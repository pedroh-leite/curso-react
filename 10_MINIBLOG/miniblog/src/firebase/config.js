import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAk9CdFihzshKknfhFX-dqI6xnmVE4SL9I",
  authDomain: "miniblog-93a0d.firebaseapp.com",
  projectId: "miniblog-93a0d",
  storageBucket: "miniblog-93a0d.appspot.com",
  messagingSenderId: "222504512258",
  appId: "1:222504512258:web:403fbf93788660c153f01b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };