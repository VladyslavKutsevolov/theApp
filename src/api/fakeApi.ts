import { CollectionsStateResource } from '../redux/state/collectionsState';

const collection: CollectionsStateResource[] = [
  {
    id: 'adsads',
    name: 'React',
    description: 'some Descriptions',
    links: [
      {
        id: 'dasdfasf',
        name: 'some react link',
        link: 'https://google.com'
      }
    ]
  },
  {
    id: 'adsadsadsads',
    name: 'Vue',
    description: 'some Descriptions',
    links: [
      {
        id: 'dasdfasf',
        name: 'some vue link',
        link: 'https://google.com'
      }
    ]
  }
];

export const fetchAllCollections = (): CollectionsStateResource[] => collection;
