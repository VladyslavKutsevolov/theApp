import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';

import Resource from './Resource';

export interface ILink {
  id: string;
  name: string;
  link: string;
}

interface Props {
  links: ILink[];
  open: boolean;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CollectionDetails = (props: Props) => {
  const { links, open } = props;
  return (
    <Transition
      show={open}
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="transform opacity-0 scale-95"
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
