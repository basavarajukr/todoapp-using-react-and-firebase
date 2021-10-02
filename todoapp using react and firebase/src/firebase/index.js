import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZuoKbEDYkK9sFD02PTSO0_V6DrxLRis4",
    authDomain: "todo-app-7789f.firebaseapp.com",
    projectId: "todo-app-7789f",
    storageBucket: "todo-app-7789f.appspot.com",
    messagingSenderId: "289829001863",
    appId: "1:289829001863:web:8b581afe1c92d42922b622"
}

firebase.initializeApp(firebaseConfig)

export default firebase