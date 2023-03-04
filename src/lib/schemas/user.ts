import { string, type, TypeOf } from 'io-ts';

export const userSchema = type({
	id: string,
	email: string,
	firstName: string,
	lastName: string,
	address: string,
	address2: string,
	city: string,
	state: string,
});

export type User = TypeOf<typeof userSchema>;