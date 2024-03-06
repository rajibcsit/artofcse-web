"use client";
import Link from "next/link";
import Image from "next/image";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import websiteLogo from "/public/images/logo/artofcse-green.svg";
import userIcon from "/public/images/svg/user.png";
import { useRouter } from "next/navigation";
import { useState } from "react";
import MenuSvg from "@/components/svg/MenuSvg";
import DropDownSvg from "@/components/svg/DropDownSvg";
import DashboardSvg from "@/components/svg/DashboardSvg";
import NotificationSvg from "@/components/svg/NotificationSvg";
import PrivacySvg from "@/components/svg/PrivacySvg";
import LogoutSvg from "@/components/svg/LogoutSvg";
import UserSvg from "@/components/svg/UserSvg";
import SettingSvg from "@/components/svg/SettingSvg";
import HomeSvg from "@/components/svg/HomeSvg";
import LessonFooter from "@/components/LessonFooter";
import { usePathname } from "next/navigation";

const navigation = [
  { icon: <HomeSvg />, name: "Home", href: "/", current: false },
  { icon: <DashboardSvg />, name: "Dashboard", href: "/user/dashboard", current: false },
  { icon: <UserSvg />, name: "Profile", href: "/user/profile", current: false },
  { icon: <SettingSvg />, name: "Account Settings", href: "/user/edit-account", current: false },
  { icon: <NotificationSvg />, name: "Notifications", href: "", current: false },
  { icon: <PrivacySvg />, name: "Privacy", href: "", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function LayoutDashboard({ children }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const currentRoute = usePathname();
  /*================= Remove Token from localStorage =================*/
  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/login");
  };
  return (
    <div>
      <>
        <div className="bg-gray-100 min-h-screen">
          <div className="flex-grow text-gray-800">
            <header className="flex items-center h-20 px-6 sm:px-10 bg-white">
              <button
                onClick={() => setOpen(!open)}
                className="sm:hidden flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full"
              >
                <MenuSvg />
              </button>
              <Link href="/" className="inline-flex items-center justify-center h-20">
                <Image src={websiteLogo} alt="logo" width={150} height={150} />
              </Link>

              <div className="flex flex-shrink-0 items-center ml-auto">
                <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
                  <span className="sr-only">Notifications</span>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full"></span>
                  <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping"></span>
                  <NotificationSvg />
                </button>
                <div className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                  <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                    <span className="font-semibold">Rajib Mia Rahid</span>
                  </div>

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
                </div>
              </div>
            </header>
          </div>
          <div className="flex">
            <nav
              className={`small-device z-[20]  w-80 sm:flex sm:flex-col justify-between text-gray-500 ${
                open ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col mx-4 my-6 space-y-4 divide-y divide-slate-300">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      item.href === currentRoute
                        ? "bg-gray-900 text-white"
                        : "text-black-300 hover:bg-gray-700 hover:text-white"
                    } rounded-md px-3 py-2 text-sm flex items-center`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </nav>
            <main className="pt-6 sm:pt-10 px-6 sm:px-10 space-y-6">
              {children}

              <LessonFooter />
            </main>
          </div>
        </div>
      </>
    </div>
  );
}

export default LayoutDashboard;
