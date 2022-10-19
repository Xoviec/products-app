import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
export type DropdownItem = {
  label: string,

}

export type DropdownProps = {
  title: string,
  children?: ReactNode[],
}

export default function Dropdown({title, children}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex flex-col justify-center border-[3px] border-[#3c83ec] text-[#3c83ec] hover:text-[#ecf3fd] hover:bg-[#3c83ec] w-full px-4 py-2 text-sm font-medium duration-500 rounded-md">
          {title}
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
        <Menu.Items className="flex flex-col border-[2px] cursor-pointer origin-top-right absolute right-0 mt-2 w-56 max-h-40 overflow-scroll rounded-md shadow-lg bg-[#FBFDFF] opacity-0 ring-1 ring-opacity-5  border-[#3c83ec] z-10 lg:w-44 md:w-36">
          <div className="flex flex-col text-[#282828]">
            {children}
          </div>
        </Menu.Items>

      </Transition>
    </Menu>
  )
}
