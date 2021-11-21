import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC2mHyvH9MyGxUqdWqEm53EFPDsIZk4ako",
    authDomain: "coderhouse-gamingshops.firebaseapp.com",
    projectId: "coderhouse-gamingshops",
    storageBucket: "coderhouse-gamingshops.appspot.com",
    messagingSenderId: "474736932899",
    appId: "1:474736932899:web:2eb3cbb786ab974f0b9996",
    measurementId: "G-2XZNPMY8Z9"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}

