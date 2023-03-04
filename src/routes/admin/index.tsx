import { createRouteData, useRouteData } from 'solid-start';
import { fetchFolders } from '~/server/discogs';

export const routeData = () => createRouteData(fetchFolders);

const Admin = () => {
	const folders = useRouteData<typeof routeData>();

	return <div>{JSON.stringify(folders())}</div>;
};

export default Admin;