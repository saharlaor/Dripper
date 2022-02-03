import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyD7mwOSjbw3TOh1rQioa1HVqTUM3IM_kzQ",
  authDomain: "dripper-e50b4.firebaseapp.com",
  projectId: "dripper-e50b4",
  storageBucket: "dripper-e50b4.appspot.com",
  messagingSenderId: "728289249617",
  appId: "1:728289249617:web:2da5d7d799a6b9ef382b70",
};
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
