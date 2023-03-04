import { flexCentered } from '~/styles/common.css';
import { sps } from '~/styles/sprinkles.css';
import { InferType, object, string } from 'yup';
import { Form, FormInput } from '../Form';
import { signUp } from '~/lib/firebase/auth';

const loginSchema = object({
	email: string().required('email_is_required').email('email_is_invalid'),
	password: string().required('password_is_required').min(8, 'password_is_too_short'),
});

const inputs: FormInput[] = [{
	name: 'email',
	label: 'Email',
	type: 'text',
	value: ''
}, {
	name: 'password',
	label: 'Password',
	type: 'password',
	value: ''
}];

type FormData = InferType<typeof loginSchema>;

export const Auth = () => {
	const onSubmit = async (valid: boolean, formData?: FormData) => {
		if (valid && formData) {
			// logIn(formData.email, formData.password);
			signUp(formData.email, formData.password);
		//  const result =	await supabase.auth.signUp(formData);
		//  result.data.session?.access_token
		}
	};

	return <div class={`${flexCentered} ${sps({ flexDirection: 'column'})}`}>
		<h1>Sign In</h1>
		<Form onSubmit={onSubmit} schema={loginSchema} inputs={inputs} column />
	</div>;
};