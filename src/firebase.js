import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCQqJzKN2hUryfEAx34yaryqmHOmnFU2zg",
	authDomain: "clone-dab4e.firebaseapp.com",
	projectId: "clone-dab4e",
	storageBucket: "clone-dab4e.appspot.com",
	messagingSenderId: "353944023341",
	appId: "1:353944023341:web:783ceea89ddd2b5d7fe3a4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
	auth
		.signInWithPopup(googleProvider)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err.message);
		});
};
