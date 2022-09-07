export interface TagData {
  id: number;
  name: string;
  subtitle: string;
  background: string;
}

export const TAGS: TagData[] = [
  {
    id: 1,
    name: 'HISTORY',
    background: '/image/tag/history.jpg',
    subtitle: 'Something about past',
  },
  {
    id: 2,
    name: 'SCIENCE',
    background: '/image/tag/science.jpg',
    subtitle: 'Something new in this world',
  },
  {
    id: 3,
    name: 'SPORT',
    background: '/image/tag/sport.jpg',
    subtitle: 'All about sport',
  },
  {
    id: 4,
    name: 'TRAVEL',
    background: '/image/tag/travel.jpg',
    subtitle: 'Everything that you need to know about where to go next.',
  },
];
