import { collection } from "firebase/firestore";
import { db } from "./init-firebase";

export const adsCollectionRef = collection(db, "ads");