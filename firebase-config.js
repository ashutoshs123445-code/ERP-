import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-storage.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAGUfCCte3_jO3v_U0kICT9XZZ-BwtrnGg",
  authDomain: "djps-school.firebaseapp.com",
  projectId: "djps-school",
  storageBucket: "djps-school.firebasestorage.app",
  messagingSenderId: "30217206024",
  appId: "1:30217206024:web:eec5a2eb43ddf4e248d4bd",
  measurementId: "G-74PHSBXQTW"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
