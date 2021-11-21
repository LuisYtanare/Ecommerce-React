import firebase from "firebase/app"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDJhagmaCcN-KKt1BJWUHAflUhqASFY2N4",
  authDomain: "mi-proyecto-de-coderhouse.firebaseapp.com",
  projectId: "mi-proyecto-de-coderhouse",
  storageBucket: "mi-proyecto-de-coderhouse.appspot.com",
  messagingSenderId: "199344369532",
  appId: "1:199344369532:web:ae35245b06c20d0322bef9"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}