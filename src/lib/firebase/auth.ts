// import { createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, User, signInWithEmailAndPassword } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore/lite';
// import { createSignal } from 'solid-js';
// import { auth, firestore } from './firebase';

// import * as TE from 'fp-ts/TaskEither';
// import { pipe } from 'fp-ts/function';
// import { userSchema } from '../schemas/user';

// export const [user, setUser] = createSignal<User | null>(null);

// onAuthStateChanged(auth, setUser);

// const createUser = (email: string, password: string) => mkReq(
// 	createUserWithEmailAndPassword(auth, email, password)
// );

// const sendVerification = (user: User) => mkReq(
// 	sendEmailVerification(user, { url: 'http://localhost:3000' })
// );

// const writeUserData = (user: User) => mkReq(setDoc(
// 	doc(firestore, 'users', user.uid),
// 	userSchema.encode({ 
// 		id: user.uid, 
// 		email: user.email || '', 
// 		firstName: '', 
// 		lastName: '', 
// 		address: '', 
// 		address2: '', 
// 		city: '', 
// 		state: ''
// 	})
// ));

// export const signUp = (email: string, password: string) => pipe(
// 	createUser(email, password),
// 	TE.map(({ user }) => user),
// 	TE.chainFirst(writeUserData),
// 	TE.chain(sendVerification),
// )();

// export const signIn = (email: string, password: string) => mkReq(
// 	signInWithEmailAndPassword(auth, email, password)
// )();