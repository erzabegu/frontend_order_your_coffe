import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.EXPO_FIREBASE_API_KEY || "random",
    authDomain: process.env.EXPO_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.EXPO_FIREBASE_PROJECT_ID,
    storageBucket: process.env.EXPO_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.EXPO_FIREBASE_MESSAGING_ID,
    appId: process.env.EXPO_FIREBASE_APP_ID,
    measurementId: process.env.EXPO_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);