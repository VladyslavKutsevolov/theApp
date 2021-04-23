import React, { FC, useEffect, useState } from 'react';
import CollectionsList from './CollectionsList';
import CollectionForm from './CollectionForm';
import { useAppDispatch } from '../../redux/hooks';
import {
  createCollection,
  fetchCollections
} from '../../redux/collectionsSlice';
import { CollectionsStateResource } from '../../redux/state/collectionsState';
import { fetchAllCollections } from '../../api/fakeApi';

const Collections: FC = () => {
  const [openForm, setOpenForm] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCollections(fetchAllCollections()));
  }, []);

  const createNewCollection = (collection: CollectionsStateResource) => {
    dispatch(createCollection(collection));
  };

  return (
    <div>
      <button
        className="m-3 p-2 border-b border-gray-200 sm:rounded-lg bg-purple-500 text-white"
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
