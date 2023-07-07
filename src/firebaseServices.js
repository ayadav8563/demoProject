import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCkrS4y-oEJJCoSrAD9pHu-rTJ7nHfumI",
  authDomain: "demoproject-62937.firebaseapp.com",
  projectId: "demoproject-62937",
  storageBucket: "demoproject-62937.appspot.com",
  messagingSenderId: "847304637013",
  appId: "1:847304637013:web:bb0432f717be5e4e9e72dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;