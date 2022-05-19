import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {getFirestore,doc,getDoc,query,where,collection,getDocs} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCuYlC50zLU3xsfZiym-oVq6zzjCIIoPRc",
  authDomain: "pet-shop-afa6c.firebaseapp.com",
  projectId: "pet-shop-afa6c",
  storageBucket: "pet-shop-afa6c.appspot.com",
  messagingSenderId: "825211501738",
  appId: "1:825211501738:web:c71a6a47a1d242ef24a4d3"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems(){
    const miColec = collection(firestoreDB, 'productos');
    const prodSnap = await getDocs(miColec);
    return prodSnap.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemsByCategory(categoyId){
    const miColec = collection(firestoreDB, 'productos');
    const queryProd = query(miColec, where("category", "==", categoyId));
    const prodSnap = await getDocs(queryProd);
    return prodSnap.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemsById(id){
    const miColec = collection(firestoreDB, 'productos');
    const prodRef = doc(miColec, id);
    const prodSnap = await getDoc(prodRef);
    return {
        ...prodSnap.data(),
        id: prodSnap.id
    }
}