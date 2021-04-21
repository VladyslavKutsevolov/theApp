import {
  createSlice,
  getDefaultMiddleware,
  PayloadAction
} from '@reduxjs/toolkit';

export interface CollectionsStateResource {
  id?: number;
  name: string;
  description: string;
}

interface CollectionState {
  collections: CollectionsStateResource[];
}

const initialState: CollectionState = {
  collections: []
};

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    createCollection: (
      state,
      action: PayloadAction<CollectionsStateResource>
    ) => {
      state.collections.push(action.payload);
    },
    fetchCollections: (
      state,
      action: PayloadAction<CollectionsStateResource[]>
    ) => {
      state.collections = action.payload;
    }
  }
});

export const { createCollection, fetchCollections } = collectionsSlice.actions;

export default collectionsSlice.reducer;

export class fetchAllCollections {}
