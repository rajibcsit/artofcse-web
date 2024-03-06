"use client";
import UserSvg from "@/components/svg/UserSvg";
import withAuth from "@/components/auth/withAuth";

const Dashboard = () => {
  return (
    <div className="lg:w-[1050px] min-h-screen mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4">
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <UserSvg />
            </div>
            <div>
              <span className="block text-2xl font-bold">62</span>
              <span className="block text-gray-500">Students</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <UserSvg />
            </div>
            <div>
              <span className="block text-2xl font-bold">62</span>
              <span className="block text-gray-500">Students</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white shadow rounded-lg">
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
              <UserSvg />
            </div>
            <div>
              <span className="block text-2xl font-bold">62</span>
              <span className="block text-gray-500">Students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
