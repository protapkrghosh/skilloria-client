import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
   apiKey: import.meta.env.VITE_SKILLORIA_APIKEY,
   authDomain: import.meta.env.VITE_SKILLORIA_AUTHDOMAIN,
   projectId: import.meta.env.VITE_SKILLORIA_PROJECTID,
   storageBucket: import.meta.env.VITE_SKILLORIA_STORAGEBUCKET,
   messagingSenderId: import.meta.env.VITE_SKILLORIA_MESSAGINGSENDERID,
   appId: import.meta.env.VITE_SKILLORIA_APPID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

console.log(firebaseConfig);