import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD2hhlxLGiecMLeUYop6dNKCx8ULdLh4hQ',
	authDomain: 'morevi-c55ce.firebaseapp.com',
	projectId: 'morevi-c55ce',
	storageBucket: 'morevi-c55ce.appspot.com',
	messagingSenderId: '205125950185',
	appId: '1:205125950185:web:cc0b17ada1493c1ad4ae78',
	measurementId: 'G-FW61C1M7MV'
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

export const auth = getAuth(app);
