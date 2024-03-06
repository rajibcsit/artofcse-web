"use client";
import Image from "next/image";
import userIcon from "/public/images/svg/user.png";
import withAuth from "@/components/auth/withAuth";

function UserProfile() {
  return (
    <div className="lg:w-[1050px] mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="px-4 pb-6">
        <div className="text-center my-4">
          <div className="border-b pb-8">
            <h3 className="text-xl text-gray-800  mb-1">Public profile</h3>
          </div>
          <Image
            src={userIcon}
            width={100}
            height={100}
            alt="icon"
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
          />
          <div className="py-2">
            <h3 className="text-sm text-gray-800  mb-1">Name: Md. Rajib Mia Rahid</h3>
            <h3 className="text-sm text-gray-800  mb-1">E-mail : rajibmia709@gmail.com</h3>
            <h3 className="text-sm text-gray-800  mb-1">Mobile: 01918111103</h3>
            <h3 className="text-sm text-gray-800  mb-1">
              Address: House no:#11,Road no:06,Block:C, Pallabi Mirpur-12 Dhaka
            </h3>
          </div>
          <div className="mt-8 ">
            <button className="btn btn-primary py-1 px-3">Edit profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuth(UserProfile);
