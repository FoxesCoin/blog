export interface Author {
	id: number;
	name: string;
	surname: string;
	description: string;
}

export const AUTHORS: Author[] = [
	{
		id: 1,
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
		name: "First",
		surname: "Author",
	},
	{
		id: 2,
		description:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",
		name: "Second",
		surname: "Author",
	},
];
