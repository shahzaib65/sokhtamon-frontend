import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBJZdATBHXtm6dw6LEqsr-ie35aRN6ZHgI",
  authDomain: "sokhtamon-2d992.firebaseapp.com",
  projectId: "sokhtamon-2d992",
  storageBucket: "sokhtamon-2d992.appspot.com",
  messagingSenderId: "547018363791",
  appId: "1:547018363791:web:c9e5869bd3ee324c16f1fa",
  measurementId: "G-HXJ6PHP3G9"
};



const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)