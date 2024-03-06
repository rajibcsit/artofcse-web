"use client";
import Image from "next/image";
import ShowSvg from "@/components/svg/ShowSvg";
import HideSvg from "@/components/svg/HideSvg";
import Link from "next/link";
import { useState } from "react";
import LoginImage from "@/public/images/all-img/login.png";
import { useRouter } from "next/navigation";
import AuthAPI from "@/data/auth";

async function onSubmit(event) {
  event.preventDefault();
  // ...
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  /*================= show/hide password input filed =================*/
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const loginFrom = async (e) => {
    e.preventDefault();
    try {
      const result = await AuthAPI.UserLogin(email, password);

      if (result.token) {
        //Set token and user localStorage
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        router.push("user/dashboard");
      } else {
        router.push("/login");
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", error);
    }
  };
  return (
    <>
      <div className="pt-36 pb-20 bg-[rgb(248,251,251)]">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12 login-image">
              <div className="column-title">
                Welcome to
                <span className="text-secondary ml-2">ARTOFCSE</span>
              </div>
              <Image
                src={LoginImage}
                className="w-full"
                width={500}
                height={250}
                alt="Login image"
              />
            </div>

            {/*-- Right column container --*/}
            <div className="mb-12 mr-10  sm:w-8/12 md:w-8/12 lg:w-5/12 xl:w-5/12 width-custome">
              <h4 className="text-xl pb-2">Log in to your Artofcse account</h4>
              <div className="mb-4 text-red-500">{error}</div>
              <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                {/*-- Email input --*/}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your Email
                    <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                {/*-- Email password --*/}
                <div className="relative">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                    <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
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
                <div className="flex items-center justify-between">
                  {/*-- Remeber me checkbox --*/}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  {/*-- Forgot password link --*/}
                  <Link
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                {/*-- Login button --*/}
                <button
                  onClick={loginFrom}
                  type="submit"
                  className="w-full text-white btn btn-primary py-2"
                >
                  Login
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
                    Login with Google
                  </button>
                </div>
                {/*-- Register link --*/}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
