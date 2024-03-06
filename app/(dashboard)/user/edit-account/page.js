"use client";
import { useState } from "react";
import withAuth from "@/components/auth/withAuth";
import ShowSvg from "@/components/svg/ShowSvg";
import HideSvg from "@/components/svg/HideSvg";

async function onSubmit(event) {
  event.preventDefault();
}

function UserAccount() {
  /*================= show/hide password input filed =================*/
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password_confirmation, setPassword_confirmation] = useState(false);

  function togglePasswordVisibility() {
    setPasswordVisible((prevState) => !prevState);
  }
  function togglePasswordVisibilityNew() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  function toggleConfirmPasswordVisibility() {
    setPassword_confirmation((prevState) => !prevState);
  }

  return (
    <div className="lg:w-[1050px] mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="px-4 pb-6">
        <div className="text-center my-4">
          <div className="border-b pb-14">
            <h3 className="text-xl text-gray-800  mb-1">Account</h3>
            <p className="text-base text-gray-800  mb-1">
              Edit your account settings and change your password here.
            </p>
          </div>
        </div>
        <div>
          <div className="container">
            <form onSubmit={onSubmit} className="space-y-4 md:space-y-6 lg:px-44">
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Old Password
                  <span className="text-red-500"> * </span>
                </label>
                <input
                  type={PasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter current password"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/*================= show/hide password button =================*/}
                <button
                  className="absolute inset-y-1 mt-6 right-0 flex items-center justify-center px-4 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {PasswordVisible ? <ShowSvg /> : <HideSvg />}
                </button>
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  New Password
                  <span className="text-red-500"> * </span>
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter new password"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/*================= show/hide password button =================*/}
                <button
                  className="absolute inset-y-1 mt-6 right-0 flex items-center justify-center px-4 text-gray-600"
                  onClick={togglePasswordVisibilityNew}
                >
                  {isPasswordVisible ? <ShowSvg /> : <HideSvg />}
                </button>
              </div>
              <div className="relative">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm New Password
                  <span className="text-red-500"> * </span>
                </label>
                <input
                  type={password_confirmation ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Re-type new password"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/*================= show/hide password button =================*/}
                <button
                  className="absolute inset-y-1 mt-6 right-0 flex items-center justify-center px-4 text-gray-600"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {password_confirmation ? <ShowSvg /> : <HideSvg />}
                </button>
              </div>
              <div className="mt-10">
                <button className="btn btn-primary py-1 px-3">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(UserAccount);
