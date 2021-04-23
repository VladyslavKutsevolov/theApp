import { CollectionsStateResource } from '../redux/state/collectionsState';

const collection: CollectionsStateResource[] = [
  {
    id: 'adsads',
    name: 'React',
    description: 'some Descriptions',
    links: []
  },
  {
    id: 'adsadsadsads',
    name: 'Vue',
    description: 'some Descriptions',
    links: []
  }
];

export const fetchAllCollections = (): CollectionsStateResource[] => collection;
