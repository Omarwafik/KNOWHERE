import React, { useEffect, useState, useCallback, useMemo } from "react";
import logo from "../../assets/images/Logo-removebg2.png";
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
} from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Categories } from "../../data/data";
import { useUser } from "../Context/UserContext";
const callsToAction = [
  // rakam knowhere
  {
    name: "Contact Wp",
    href: "https://wa.me/201050066009?text=Hello%20I%27m%20interested%20in%20your%20services",
    icon: FaWhatsapp,
  },
];
function NavBar() {
  const { user, logoutUser } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [scrollbar, setScrollBar] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/home") return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const shouldShow = window.scrollY > 720;
        setScrollBar((prev) => (prev !== shouldShow ? shouldShow : prev));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  // Handlers
  const handleLogoClick = useCallback(() => {
    navigate("/home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [navigate]);

  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);

  // Stable references (if Categories/callsToAction become dynamic later)
  const categories = useMemo(() => Categories, []);
  const calls = useMemo(() => callsToAction, []);
  return (
    <header className="fixed top-0 w-full z-30">
      {/* Overlay للـ Gradient */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          location.pathname === "/" || location.pathname === "/home"
            ? scrollbar
              ? "opacity-100 bg-gradient-to-r from-grad1 to-grad2"
              : "opacity-0"
            : "bg-gradient-to-r from-grad1 to-grad2"
        }`}
      />
      <nav
        aria-label="Global"
        className=" flex w-full items-center relative justify-between lg:justify-around p-3  px-4 sm:px-7 md:px-2"
      >
        {/* Logo on the Left */}
        {/* flex 1 howa el byedy el masfaa kolaha lel */}
        <div className="flex  items-center">
          <a onClick={handleLogoClick}>
            <img
              alt="Knowhere logo"
              src={logo}
              width={60}
              height={60}
              decoding="async"
              className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]"
            />
          </a>
        </div>
        {/* on Mobile */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={openMobileMenu}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
          >
            <span className="sr-only text-primary">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-10" />
          </button>
        </div>

        {/* on large screen */}
        <PopoverGroup className="hidden md:flex md:gap-x-10 lg:gap-x-16 ">
          <Popover className="relative">
            {({ open, close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                  Services
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="size-5 flex-none text-white"
                  />
                </PopoverButton>

                {open && (
                  <PopoverPanel
                    transition
                    className="absolute left-1/2 z-30 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg outline outline-1 outline-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                  >
                    <div className="p-4 ">
                      {categories.map((item) => (
                        <div
                          key={item.category}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                          onClick={() => close()}
                        >
                          <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                            <item.icon
                              aria-hidden="true"
                              className="size-6 text-gray-700 group-hover:text-indigo-600"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              className="block font-semibold text-gray-900"
                              to={`/rooms/${item.category}`}
                            >
                              {item.category}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="w-full divide-gray-900/5 bg-gray-50 ">
                      {calls.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-700 hover:bg-gray-100"
                        >
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-gray-400"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                )}
              </>
            )}
          </Popover>

          <a
            href="#about"
            onClick={() => navigate("/home#about")}
            className="text-sm/6 font-semibold text-white"
          >
            About
          </a>
          <a href="#contact" className="text-sm/6 font-semibold text-white">
            Contact Us
          </a>
        </PopoverGroup>

        {/* welcome User With Admin Dashboard condition Handled*/}
        <div className="hidden md:flex  md:justify-end">
          {/* <Link to="/login"> */}
          <div className="flex items-center gap-10">
            {user && (user.is_staff || user.is_superuser) ? (
              <a
                href="http://127.0.0.1:8000/admin/"
                className="text-sm/6 font-semibold border border-white px-5 py-1 text-white hover:bg-white hover:text-primary transition"
              >
                DashBoard <span aria-hidden="true">&rarr;</span>
              </a>
            ) : (
              <h1 className="text-white font-bold capitalize text-sm lg:text-[16px]">
                {user ? (
                  <span className="font-normal">
                    Welcome : {user.full_name}
                  </span>
                ) : (
                  <span className="font-normal">Welcome : Guest </span>
                )}
              </h1>
            )}

            <Link
              to="/SignUp"
              className="text-sm/6 font-semibold border border-white px-5 py-1 text-white hover:bg-white hover:text-primary transition"
              onClick={logoutUser}
            >
              Log Out <span aria-hidden="true">&rarr;</span>
            </Link>
            {/* </Link> */}
          </div>
        </div>
      </nav>

      {/* when Burger icon open */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-20" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only ">Your Company</span>
              <img
                alt="Knowhere logo"
                src={logo}
                width={60}
                height={60}
                decoding="async"
                className="h-[50px] w-[50px] sm:h-[60px] sm:w-[60px]"
              />
            </a>
            <button
              type="button"
              onClick={closeMobileMenu}
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
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-white hover:bg-black">
                        Services
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 flex-none group-data-[open]:rotate-180"
                        />
                      </DisclosureButton>
                      {open && (
                        <DisclosurePanel className="my-2 bg-white space-y-2 rounded">
                          <div className="p-4 ">
                            {categories.map((item) => (
                              <div
                                key={item.category}
                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                onClick={closeMobileMenu}
                              >
                                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                  <item.icon
                                    aria-hidden="true"
                                    className="size-6 text-gray-700 group-hover:text-indigo-600"
                                  />
                                </div>
                                <div className="flex-auto">
                                  <Link
                                    className="block font-semibold text-gray-900"
                                    to={`/rooms/${item.category}`}
                                    onClick={closeMobileMenu}
                                  >
                                    {item.category}
                                    <span className="absolute inset-0" />
                                  </Link>
                                  <p className="mt-1 text-gray-600">
                                    {item.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 rounded">
                            {calls.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                target="_blank"
                                className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-700 hover:bg-gray-100"
                                onClick={closeMobileMenu}
                              >
                                <item.icon
                                  aria-hidden="true"
                                  className="size-5 flex-none text-gray-400"
                                />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </DisclosurePanel>
                      )}
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/home#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-black"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>
                <a
                  href="#contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-black"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </a>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-black"
                  onClick={closeMobileMenu}
                >
                  Log Out
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default NavBar;

// import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

// export default function Example() {
//   return (
//     <Menu as="div" className="relative inline-block">
//       <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/5 hover:bg-white/20">
//         Options
//         <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
//       </MenuButton>

//       <MenuItems
//         transition
//         className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//       >
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Edit
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Duplicate
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Archive
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Move
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Share
//             </a>
//           </MenuItem>
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Add to favorites
//             </a>
//           </MenuItem>
//         </div>
//         <div className="py-1">
//           <MenuItem>
//             <a
//               href="#"
//               className="block px-4 py-2 text-sm text-gray-300 data-[focus]:bg-white/5 data-[focus]:text-white data-[focus]:outline-none"
//             >
//               Delete
//             </a>
//           </MenuItem>
//         </div>
//       </MenuItems>
//     </Menu>
//   )
// }
