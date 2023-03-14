// import { flexCentered } from '~/styles/common.css';
// import { sps } from '~/styles/sprinkles.css';
// import { FormInput } from '../Form';
// import { isMatching, P } from 'ts-pattern';
// import { includes, size } from 'fp-ts/lib/string';

// // const loginSchema = type({
// // 	email: refinement(string, (email) => email.includes('@')),
// // 	password: refinement(string, (password) => password.length > 5),
// // });

// const loginSchema = {
// 	email: P.when((email): email is string => includes('@')(email as string)),
// 	password: P.when((password): password is string => size(password as string) > 5)
// };

// const inputs: FormInput[] = [{
// 	name: 'email',
// 	label: 'Email',
// 	type: 'text',
// 	value: ''
// }, {
// 	name: 'password',
// 	label: 'Password',
// 	type: 'password',
// 	value: ''
// }];

// type FormData = P.infer<typeof loginSchema>;

// export const Auth = () => {
// 	// const onSubmit = (values: Validation<Accessor<LoginFormData>>) => {
// 	// 	console.log(values);	
// 	// 	// logIn(formData.email, formData.password);
// 	// 	// signUp(formData.email, formData.password);
// 	// 	//  const result =	await supabase.auth.signUp(formData);
// 	// 	//  result.data.session?.access_token
// 	// };

// 	return <div class={`${flexCentered} ${sps({ flexDirection: 'column'})}`}>
// 		<h1>Sign In</h1>
// 		{/* <Form onSubmit={onSubmit} schema={loginSchema} inputs={inputs} column /> */}
// 	</div>;
// };