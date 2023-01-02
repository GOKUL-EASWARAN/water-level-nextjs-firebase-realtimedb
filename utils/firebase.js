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

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);