import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between bg-white xl:mx-auto">
        {/* Left - logo */}
        <div className="relative hidden w-24 cursor-pointer lg:inline-grid">
          <Image src="/images/insta.png" layout="fill" objectFit="contain" />
        </div>
        <div className="relative  w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="/images/insta-logo.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle -search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md  p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="block w-full rounded-md border border-gray-300 bg-gray-50 py-1 pl-10 focus:border-black focus:ring-black sm:text-sm"
              type="text "
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />
          <div className="navBtn relative">
            <PaperAirplaneIcon className="navBtn" />
            <div className=" absolute -right-2 -top-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <img
            src="/images/prof.png"
            alt=""
            className="h-10 cursor-pointer rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header