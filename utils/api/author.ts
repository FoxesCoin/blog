export interface AuthorData {
  id: number;
  name: string;
  surname: string;
  description: string;
  background: string;
  logo: string;
}

const description =
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem';

export const AUTHORS: AuthorData[] = [
  {
    id: 1,
    description,
    name: 'First',
    surname: 'Author',
    logo: '/image/author/author_1.svg',
    background: '/image/author/author_1_background.jpg',
  },
  {
    id: 2,
    description,
    name: 'Third',
    surname: 'Author',
    logo: '/image/author/author_2.svg',
    background: '/image/author/author_2_background.jpg',
  },
  {
    id: 3,
    description,
    name: 'Second',
    surname: 'Author',
    logo: '/image/author/author_1.svg',
    background: '/image/author/author_1_background.jpg',
  },
  {
    id: 4,
    description,
    name: 'Fourth',
    surname: 'Author',
    logo: '/image/author/author_2.svg',
    background: '/image/author/author_2_background.jpg',
  },
  {
    id: 5,
    description,
    name: 'Fifth',
    surname: 'Author',
    logo: '/image/author/author_1.svg',
    background: '/image/author/author_1_background.jpg',
  },
  {
    id: 6,
    description,
    name: 'Sixth',
    surname: 'Author',
    logo: '/image/author/author_2.svg',
    background: '/image/author/author_2_background.jpg',
  },
];
