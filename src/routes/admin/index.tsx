import { Show } from 'solid-js';
import { useRouteData } from 'solid-start';
import { ShowEither } from '~/components/ShowEither';
import { fetchFolders } from '~/server/discogs';

export const routeData = fetchFolders;

const Admin = () => {
	const { data, isFetching } = useRouteData<typeof routeData>();

	return <Show when={!isFetching()} fallback={<>Loading</>}>
		<ShowEither either={data()!} fallback={<>Invalid data</>}>
			{(folders) => folders.map(folder => <div>{folder.name}</div>)}
		</ShowEither>
	</Show>;
};

export default Admin;