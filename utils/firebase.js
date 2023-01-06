import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyD_Ghqp_AyPx5ePZZuwe30HTfz8e5np7xc",
    authDomain: "water-level-esp32.firebaseapp.com",
    databaseURL: "https://water-level-esp32-default-rtdb.firebaseio.com",
    projectId: "water-level-esp32",
    storageBucket: "water-level-esp32.appspot.com",
    messagingSenderId: "27450494476",
    appId: "1:27450494476:web:b8ebb085c71a7e33a46829"
};
// const firebaseConfig = {
//     apiKey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID
// };
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);