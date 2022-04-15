
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBZ2IAESKaoYPl9RT0glM42TAf8HCfSM0Q",
  authDomain: "tech-crunch-c28f7.firebaseapp.com",
  projectId: "tech-crunch-c28f7",
  storageBucket: "tech-crunch-c28f7.appspot.com",
  messagingSenderId: "149821005958",
  appId: "1:149821005958:web:c95bb4bc9c8b32afc33107"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app; 