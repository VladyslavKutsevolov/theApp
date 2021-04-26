import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

import Resource from './Resource';
import { classNames } from '../../utils/classNames';

export interface ILink {
  id: string;
  name: string;
  link: string;
}

interface Props {
  links: ILink[];
  open: boolean;
}

const CollectionDetails = (props: Props) => {
  const { links, open } = props;
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-250"
      enterFrom="transform opacity-0 scale-98"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div
        className={classNames(
          !open ? 'hidden' : '',
          'bg-white shadow overflow-hidden sm:rounded-lg'
        )}
      >
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">About</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>

            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Create Link</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-2">
                    <label
                      htmlFor="link_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Link Name
                    </label>
                    <input
                      type="text"
                      name="link_name"
                      id="link_name"
                      className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Resource name"
                    />
                  </div>

                  <div className="col-span-3">
                    <label
                      htmlFor="url"
                      className="block text-sm font-medium text-gray-700"
                    >
                      URL
                    </label>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="http://www.example.com"
                    />
                  </div>
                  <div className="col-span-1 flex items-end">
                    <button
                      type="button"
                      className="inline-flex items-center px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Create
                    </button>
                  </div>
                </div>
              </dd>
            </div>

            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Link</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {links.map(link => (
                    <Resource key={link.id} {...link} />
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Transition>
  );
};

export default CollectionDetails;
