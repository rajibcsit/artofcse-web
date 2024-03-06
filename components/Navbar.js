"use client";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import CloseSvg from "@/components/svg/ClosoSvg";
import OpenSvg from "@/components/svg/OpenSvg";
import UserSvg from "@/components/svg/UserSvg";
import DashboardSvg from "@/components/svg/DashboardSvg";
import SettingSvg from "@/components/svg/SettingSvg";
import LogoutSvg from "@/components/svg/LogoutSvg";
import Link from "next/link";
import { Fragment } from "react";
import websiteLogo from "/public/images/logo/artofcse-green.svg";
import userIcon from "/public/images/svg/user.png";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import NotificationSvg from "./svg/NotificationSvg";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Courses", href: "/learning/video", current: false },
  { name: "Problem Solving", href: "/learning/problem", current: false },
  { name: "Code", href: "/learning/code", current: false },
  { name: "Blog", href: "/blog", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const currentRoute = usePathname();
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  /*================= Remove Token from localStorage =================*/
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };

  /*================Check if the user is already logged in=================*/
  useEffect(() => {
    // checks whether we are on the client/browser or server.
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setIsUserLoggedIn(!!token); // Set the state based on whether the token exists
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="z-[20] fixed top-0 left-0 right-0 py-2 mobile-bg">
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-1 left-0  items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="mobile-menu place-content-end inline-flex items-center justify-center rounded-md p-2 text-gray-400">
                      {open ? <CloseSvg /> : <OpenSvg />}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center sm:items-stretch">
                    <div className="flex flex-shrink-0 items-center" id="sm-justify-center">
                      <Link href="/">
                        <Image src={websiteLogo} alt="logo" width={150} height={150} />
                      </Link>
                    </div>
                    <div className="hidden sm:ml-6 sm:block ">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            className={classNames(
                              item.href === currentRoute
                                ? "bg-gray-900 text-white"
                                : "text-black-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm"
                            )}
                            href={item.href}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <div className="lg:block">
                      {!isUserLoggedIn ? (
                        <Link href="/login" className="btn btn-primary py-1 px-3">
                          Login
                        </Link>
                      ) : (
                        <span className="font-semibold">Rahid</span>
                      )}
                    </div>
                    {isUserLoggedIn && (
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={userIcon}
                              width={100}
                              height={100}
                              alt="icon"
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
                          <Menu.Items className="absolute right-0 z-10 mt-5 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Link
                              href="/user/dashboard"
                              className="inline-flex w-36 items-center py-2 text-sm pl-3 hover:bg-gray-100"
                            >
                              <DashboardSvg />
                              <span className="pl-1">Dashboard</span>
                            </Link>
                            <Link
                              href="/user/profile"
                              className="inline-flex w-36 items-center py-2 text-sm pl-3 hover:bg-gray-100"
                            >
                              <UserSvg />
                              <span className="pl-1">Profile</span>
                            </Link>
                            <Link
                              href="/user/edit-account"
                              className="inline-flex w-36 items-center py-2 text-sm pl-3 border-b border-slate-200  hover:bg-gray-100"
                            >
                              <SettingSvg />
                              <span className="pl-1">Settings</span>
                            </Link>
                            <button
                              onClick={signOut}
                              className="inline-flex w-36 items-center py-2 text-sm pl-3 hover:bg-gray-100"
                            >
                              <LogoutSvg />
                              <span className="pl-1">Logout</span>
                            </button>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item_menu) => (
                    <Disclosure.Button
                      key={item_menu.name}
                      as="a"
                      href={item_menu.href}
                      className={classNames(
                        item_menu.current
                          ? "bg-gray-500 text-white"
                          : "block rounded-md px-3 py-2 text-sm"
                      )}
                      // aria-current={item_menu.current ? "page" : undefined}
                    >
                      {item_menu.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}
