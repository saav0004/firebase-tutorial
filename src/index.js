import {initializeApp} from "firebase/app"
import { 
    getFirestore, collection, getDocs
 } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAdQweSpY0ZMGA4kzE-bHRPwZ4INd7ISNE",
  authDomain: "fir-9-dojo-b4941.firebaseapp.com",
  projectId: "fir-9-dojo-b4941",
  storageBucket: "fir-9-dojo-b4941.appspot.com",
  messagingSenderId: "221394255150",
  appId: "1:221394255150:web:25dbf346eab12f967acebf"
};

//init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

// collection refs
const colRef = collection(db, 'books')

// get collection data

getDocs(colRef).then((snapshot)=> {
    let books = []
    snapshot 
})