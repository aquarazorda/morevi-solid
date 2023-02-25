import { APIEvent } from 'solid-start';

const handler = async (event: APIEvent) => {
	// const body = await new Response(event.request.body).json();
	return new Response('kopala');
};

export const GET = handler;