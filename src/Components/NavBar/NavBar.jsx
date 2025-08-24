import React from 'react'
import{ useState } from 'react'
import logo from "../../assets/images/Logo-removebg.png"
'use client'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link, useNavigate } from 'react-router-dom'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'aufuyerg', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]
export default function NavBar() {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const navigate = useNavigate()

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-grad1 to-grad2 z-30">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center relative justify-between p-3 py-7 px-8 sm:px-16 md:px-8">
          {/* Logo on the Left */}
          {/* flex 1 howa el byedy el masfaa kolaha lel */}
          <div className="flex md:flex-1 items-center">
            <a onClick={()=>navigate("/home")} className="-m-1.5 p-1.5 flex justify-center items-center absolute left-0 -top-5 sm:-top-8 gap-2">
              <img
                alt=""
                src={`${logo}`}
                className="h-[125px] w-[125px] sm:h-[150px] sm:w-[150px] "
              />
              {/* <span className=" bg-primary text-white text-3xl flex justify-center items-center w-[65px] h-[65px] rounded-[50%] font-bold">KW</span> */}
            </a>
          </div>
          {/* on Mobile */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
              <span className="sr-only text-primary">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden md:flex md:gap-x-12 ">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                Services
                <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-white" />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-30 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline outline-1 outline-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4 ">
                  {
                  products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon aria-hidden="true" className="size-6 text-gray-700 group-hover:text-indigo-600" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 ">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <a href="#about" className="text-sm/6 font-semibold text-white">
              About
            </a>
            <a href="#contact" className="text-sm/6 font-semibold text-white">
              Contact Us
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Company
            </a>
          </PopoverGroup>
          <div className="hidden md:flex md:flex-1 md:justify-end">
            {/* <Link to="/login"> */}
            <Link to="/login" className="text-sm/6 font-semibold border border-white px-5 py-1 text-white hover:bg-white hover:text-primary transition">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
            {/* </Link> */}
          </div>
        </nav>
        {/* when Burger icon Appear */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-20" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                alt=""
                src={`${logo}`}
                className="h-[125px] w-[125px] sm:h-[150px] sm:w-[150px] text-primary"
              />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-white"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-black">
                      Services
                      <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-[open]:rotate-180" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2 ">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-white hover:bg-black"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-black"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-black"
                  >
                    Contact Us
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-black"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-black"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  )
}
