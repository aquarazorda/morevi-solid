import { createEffect } from "solid-js";
import server$, { createServerData$ } from "solid-start/server";

export function routeData() {
	return createServerData$(async () => {
		return {
			title: "Morevi.ge",
		};
	});
}

const Admin = () => {
	// server$(async () => {
	//   console.log(import.meta.env);
	// })();
	console.log(import.meta.env);
	return <div>Test</div>;
};

export default Admin;