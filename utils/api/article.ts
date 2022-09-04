export interface ArticleData {
	id: number;
	idTag: number;
	idAuthor: number;

	title: string;
	subtitle: string;
	content: string;
	dateCreate: string;
}

const CONTENT_LOREM_IPSUM =
	"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo pellentesque facilisis. Etiam imperdiet imperdiet orci. Nunc nec neque. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac";

export const ARTICLES: ArticleData[] = [
	{
		id: 1,
		idAuthor: 1,
		idTag: 1,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2012-12-31 23:59:59",
	},
	{
		id: 2,
		idAuthor: 1,
		idTag: 2,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2013-12-31 23:59:59",
	},
	{
		id: 3,
		idAuthor: 1,
		idTag: 3,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2014-12-31 23:59:59",
	},
	{
		id: 4,
		idAuthor: 1,
		idTag: 4,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2015-12-31 23:59:59",
	},
	{
		id: 5,
		idAuthor: 2,
		idTag: 1,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2016-12-31 23:59:59",
	},
	{
		id: 6,
		idAuthor: 2,
		idTag: 2,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2017-12-31 23:59:59",
	},
	{
		id: 7,
		idAuthor: 2,
		idTag: 3,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2018-12-31 23:59:59",
	},
	{
		id: 8,
		idAuthor: 2,
		idTag: 4,
		content: CONTENT_LOREM_IPSUM,
		subtitle: "All new feature in React 18",
		title: "React 18 feature",
		dateCreate: "2019-12-31 23:59:59",
	},
];
