import React, { useState } from 'react';
import CollectionsList from './CollectionsList';
import CollectionForm from './CollectionForm';
import { useAppDispatch } from '../../redux/hooks';
import {
  CollectionsStateResource,
  createCollection
} from '../../redux/collectionsSlice';

const Collections = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useAppDispatch();

  const createNewCollection = (collection: CollectionsStateResource) => {
    dispatch(createCollection(collection));
  };

  return (
    <div>
      <button
        className="m-3 p-2 border-b border-gray-200 sm:rounded-lg"
        type="button"
        onClick={() => setOpenForm(true)}
      >
        Create Collection
      </button>
      <CollectionForm
        open={openForm}
        createCollection={createNewCollection}
        setOpen={setOpenForm}
      />
      <CollectionsList />
    </div>
  );
};

export default Collections;
