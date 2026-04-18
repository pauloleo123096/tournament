// firebase-setup.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyC7n0itej-hIh4M4pGQBs-QQrML-f-sNwM",
    authDomain: "lvlupgames-backend.firebaseapp.com",
    projectId: "lvlupgames-backend",
    storageBucket: "lvlupgames-backend.firebasestorage.app",
    messagingSenderId: "1033906369662",
    appId: "1:1033906369662:web:847dc1d8d649340d74142f"
};

// Initialize the core services
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export them so other pages can use them
export { db, auth };
