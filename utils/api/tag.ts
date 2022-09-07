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
    background: '',
    subtitle: 'Something about past',
  },
  {
    id: 2,
    name: 'SCIENCE',
    background: '',
    subtitle: 'Something new in this world',
  },
  {
    id: 3,
    name: 'SPORT',
    background: '',
    subtitle: 'All about sport',
  },
  {
    id: 4,
    name: 'TRAVEL',
    background: '',
    subtitle: 'Everything that you need to know about where to go next.',
  },
];
