import * as t from 'io-ts';

export const folder = t.type({
	id: t.number,
	count: t.number,
	name: t.string,
});

export const folders = t.type({
	folders: t.array(folder),
});

export type Folder = t.TypeOf<typeof folder>;
export type Folders = t.TypeOf<typeof folders>;