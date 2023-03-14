import { P } from 'ts-pattern';

export const folderSchema = {
	id: P.number,
	count: P.number,
	name: P.string,
};

export const foldersSchema = {
	folders: P.array(folderSchema),
};

export type Folder = P.infer<typeof folderSchema>;
export type Folders = P.infer<typeof foldersSchema>;