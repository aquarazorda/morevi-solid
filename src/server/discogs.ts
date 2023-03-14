import { pipe } from 'fp-ts/lib/function';
import { chain, right } from 'fp-ts/lib/TaskEither';
import { createCachedResource } from 'solid-cache';
import server$ from 'solid-start/server';
import { foldersSchema } from '~/lib/schemas/discogs';
import { mkReq } from '~/lib/utils';
import { queries } from '~/resources/queries';

const apiUrl = 'https://api.discogs.com/';

export const fetchFolders_ = server$(pipe(
	mkReq(`${apiUrl}users/${process.env.DISCOGS_USERNAME}/collection/folders?token=${process.env.DISCOGS_TOKEN}`, foldersSchema),
	chain(({ folders }) => right(folders))
));

export const fetchFolders = () => createCachedResource({
	key: queries.discogsFolders,
	get: fetchFolders_
});
