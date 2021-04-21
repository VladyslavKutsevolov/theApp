import React, { useState } from 'react';
import CollectionsList from './CollectionsList';
import CollectionForm from './CollectionForm';

const Collections = () => {
  const [openForm, setOpenForm] = useState(false);

  return (
    <div>
      <button
        className="m-3 p-2 border-b border-gray-200 sm:rounded-lg"
        type="button"
        onClick={() => setOpenForm(true)}
      >
        Create Collection
      </button>
      <CollectionForm open={openForm} setOpen={setOpenForm} />
      <CollectionsList />
    </div>
  );
};

export default Collections;
