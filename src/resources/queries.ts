export const defaultQueryParams = {
	refetchOnReconnect: false,
	refetchOnWindowFocus: false,
	refetchOnMount: false,
	retry: false
};

export const queries = {
	products: (page: number) => ['products', page],
	product: (id: string) => ['product', id],
	discogsFolders: 'dc_folders'
};