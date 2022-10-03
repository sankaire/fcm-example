import * as firebase from "firebase-admin/app";
import { getMessaging } from "firebase-admin/messaging";
import {GOOGLE_APPLICATION_CREDENTIALS} from "./firebaseCredential";

try {
    firebase.initializeApp({
        credential: firebase.cert(GOOGLE_APPLICATION_CREDENTIALS),
    });
} catch (error) {
    console.log(error);
}

const app = firebase.getApps()[0];
const fcm = getMessaging(app);

export default fcm;