import React from 'react';
import {
  BriefcaseIcon,
  CheckIcon,
  LinkIcon,
  LocationMarkerIcon
} from '@heroicons/react/solid';

import { CollectionsStateResource } from '../../redux/state/collectionsState';
import CollectionDetails from './CollectionDetails';

// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(' ');
// }

interface Props {
  collection: CollectionsStateResource;
}

const Collection = (props: Props) => {
  const { collection } = props;
  return (
    <div className="border rounded-md mx-3 mb-2">
      <div className="lg:flex lg:items-center lg:justify-between p-3">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {collection.name}
          </h2>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <BriefcaseIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Created By Vlad
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <LocationMarkerIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Links
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <span className="hidden sm:block ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <LinkIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                aria-hidden="true"
              />
              View
            </button>
          </span>
          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Share
            </button>
          </span>
        </div>
      </div>
      <CollectionDetails links={collection.links} />
    </div>
  );
};

export default Collection;
