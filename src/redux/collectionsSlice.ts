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
  collections: [
    {
      id: 1,
      name: 'React',
      description: 'Some react stuff'
    }
  ]
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
    }
  }
});

export const { createCollection } = collectionsSlice.actions;

export default collectionsSlice.reducer;
