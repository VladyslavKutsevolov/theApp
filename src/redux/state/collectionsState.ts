import { ResourceLinksState } from './resourceLinksState';

export interface CollectionsStateResource {
  id?: string;
  name: string;
  description: string;
  links: ResourceLinksState[];
}

export interface CollectionState {
  collections: CollectionsStateResource[];
}

export const initialState: CollectionState = {
  collections: []
};
