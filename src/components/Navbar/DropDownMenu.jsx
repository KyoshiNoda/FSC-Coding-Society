import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const DropDownMenu = () => {
  return (
    <div className="lg:hidden top-16 w-auto text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring- focus-visible:ring-opacity-75">
            Option
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-black-200 hover:text-green-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-auto origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  > 
                    {active ? (
                      <EventsActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <EventsInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    News
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ArchiveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArchiveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Events
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-green-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <ExecutivesActiveIcon
                        className="mr-2 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <ExecutivesInactiveIcon
                        className="mr-2 h-5 w-5 text-green-400"
                        aria-hidden="true"
                      />
                    )}
                    Executives
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

function EventsInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#fcfffc"
        stroke="#80ed99"
        strokeWidth="2"
      />
    </svg>
  )
}

function EventsActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#80ed99"
        stroke="#2d6a4f"
        strokeWidth="2"
      />
    </svg>
  )
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#fcfffc"
        stroke="#80ed99"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#fcfffc"
        stroke="#80ed99"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#80ed99" strokeWidth="2" />
    </svg>
  )
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#80ed99"
        stroke="#2d6a4f"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#80ed99"
        stroke="#2d6a4f"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#2d6a4f" strokeWidth="2" />
    </svg>
  )
}

function ExecutivesInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#fcfffc"
        stroke="#80ed99"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#80ed99" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#80ed99" strokeWidth="2" />
    </svg>
  )
}

function ExecutivesActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#80ed99"
        stroke="#2d6a4f"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#2d6a4f" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#2d6a4f" strokeWidth="2" />
    </svg>
  )
}

export default DropDownMenu;