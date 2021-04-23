import { CollectionsStateResource } from '../redux/collectionsSlice';

const collection: CollectionsStateResource[] = [
  {
    id: 1,
    name: 'React',
    description: 'some Descriptions'
  },
  {
    id: 2,
    name: 'Vue',
    description: 'some Descriptions'
  }
];

export const fetchAllCollections = (): CollectionsStateResource[] => collection;
