import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPbb9Z9br0-DL0Xx-oEWY80p-0uv5pvNs",
  authDomain: "workshop-test-fce39.firebaseapp.com",
  projectId: "workshop-test-fce39",
  storageBucket: "workshop-test-fce39.appspot.com",
  messagingSenderId: "123261918190",
  appId: "1:123261918190:web:0ec4a593630636e7ed0cff"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
