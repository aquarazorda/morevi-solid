import { createEffect } from 'solid-js';
import { useRouteData } from 'solid-start';
import server$, { createServerData$ } from 'solid-start/server';

export function routeData() {
	return createServerData$(async () => {
		console.log(process);
		return {
			title: 'Morevi.ge',
		};
	});
}

const Admin = () => {
	// server$(async () => {
	//   console.log(import.meta.env);
	// })();
	const data = useRouteData<typeof routeData>();
	createEffect(() => console.log(data()));
	return <div>Test</div>;
};

export default Admin;