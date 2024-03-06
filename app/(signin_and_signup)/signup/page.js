"use client";
import HideSvg from "@/components/svg/HideSvg";
import ShowSvg from "@/components/svg/ShowSvg";
import LoginImage from "@/public/images/all-img/login.png";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function onSubmit(event) {
  event.preventDefault();
  // ...
}
const Registration = () => {
  /*================= show/hide password input filed =================*/
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  /*================= show/hide Confirm password input filed =================*/
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  function toggleConfirmPasswordVisibility() {
    setConfirmPasswordVisible((prevState) => !prevState);
  }
  //Registration functionality
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const router = useRouter();
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL;

  const registraitonFrom = async (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}auth/register`, { name, email, password, password_confirmation })
      .then((response) => {
        setSuccess(response.data.data);
        router.push("/login");
      })
      .catch((error) => {
        setError(error.response.data.errors);
      });
  };

  return (
    <>
      <div className="pt-36 pb-20 bg-[rgb(248,251,251)]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 mt-[-100px] grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 login-image">
              <div className="column-title">
                Welcome to
                <span className="text-secondary ml-2">ARTOFCSE</span>
              </div>
              <Image
                src={LoginImage}
                className="w-full"
                width={300}
                height={200}
                alt="Login image"
              />
            </div>

            {/*===========Right column container =========*/}
            <div className="mb-12 mr-10 lg:mt-8 sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-5/12 width-custome">
              <h4 className="text-xl pb-3">Sign up and start learning</h4>
              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                {/*-- Name input --*/}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Name
                    <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                  />
                </div>
                {error?.name && <p style={{ color: "red" }}>{error.name[0]}</p>}
                {/*-- Email input --*/}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Email
                    <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                {error?.email && <p style={{ color: "red" }}>{error.email[0]}</p>}
                {/*--  password input --*/}
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                    <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/*================= show/hide password button =================*/}
                  <button
                    className="absolute inset-y-1 mt-6 right-0 flex items-center justify-center px-4 text-gray-600"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? <ShowSvg /> : <HideSvg />}
                  </button>
                </div>
                {error?.password && <p style={{ color: "red" }}>{error.password[0]}</p>}
                {/*-- Confirm password input --*/}
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Confirm Password
                    <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    name="password_confirmation"
                    id="ConfirmPassword"
                    onChange={(e) => setPassword_confirmation(e.target.value)}
                    placeholder="Confirm Password"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/*================= show/hide password button =================*/}
                  <button
                    className="absolute inset-y-1 mt-6 right-0 flex items-center justify-center px-4 text-gray-600"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {isConfirmPasswordVisible ? <ShowSvg /> : <HideSvg />}
                  </button>
                </div>
                {error?.password_confirmation && (
                  <p style={{ color: "red" }}>{error.password_confirmation[0]}</p>
                )}

                {/*-- Registration button --*/}
                <button
                  onClick={registraitonFrom}
                  type="submit"
                  className="w-full text-white btn btn-primary py-2"
                >
                  Signup
                </button>

                {/*-- Separator between social media sign in and email/password sign in  --*/}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
                </div>
                {/*-- Sign in section --*/}
                <div className="flex items-center justify-center lg:justify-start">
                  <button type="submit" className="w-full text-white btn btn-primary py-2">
                    <span className="relative top-1 mr-2 ">
                      <iconify-icon icon="flat-color-icons:google"></iconify-icon>
                    </span>
                    Signup with Google
                  </button>
                </div>
                {/*-- Register link --*/}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account yet?
                  <Link
                    href="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                  >
                    Login
                  </Link>
                </p>
              </form>
              {/* Display success or error messages */}
              {success && <p style={{ color: "green" }}>{success}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;
