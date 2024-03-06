"use client";
import Link from "next/link";
import Image from "next/image";
import searchSvg from "@/public/images/svg/search.svg";
import RelatedCourseImg from "/public/images/all-img/rc-1.png";
import RelatedCourseImg1 from "/public/images/all-img/rc-2.png";
import RelatedCourseImg2 from "/public/images/all-img/rc-3.png";
import BlogInstragramImg from "/public/images/all-img/ins-1.png";
import { useEffect, useState } from "react";
import { LoaderScreenBlogCategory } from "../loding/LoaderScreenBlogCategory";
import BlogAPI from "@/data/blogs";

function SidebarWrapper() {
  const [blogs, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Load all post here
  useEffect(() => {
    getAllBlogs();
  }, []);
  //get All Post here from API

  const getAllBlogs = async () => {
    const blogs = await BlogAPI.blogCategory();
    setBlog(blogs);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoaderScreenBlogCategory />
      ) : (
        <div className="sidebarWrapper space-y-[30px]">
          <div className="wdiget widget_search">
            <div className="bg-[#F8F8F8] flex rounded-md shadow-e1 items-center py-[4px] pl-3 relative">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search keyword..."
                  className="border-none focus:ring-0 bg-transparent"
                />
              </div>
              <div className="flex-none">
                <button className="btn btn-primary">
                  <Image src={searchSvg} alt="search" />
                </button>
              </div>
            </div>
          </div>
          <div className="wdiget widget_catagory">
            <h4 className="widget-title">Categories</h4>

            <ul className="list-item space-y-4">
              {blogs.map((category) => {
                return (
                  <li key={category.id} className="block">
                    <Link
                      href="#"
                      className="flex justify-between bg-[#F8F8F8] py-[17px] px-5 rounded hover:bg-primary hover:text-white transition-all duration-150"
                    >
                      <span>{category.title} </span>
                      <span className="text-2xl">
                        <iconify-icon icon="heroicons:chevron-right-20-solid"></iconify-icon>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* <div className="wdiget widget-recent-post">
                      <h4 className="widget-title">Related Courses</h4>
                      <ul className="list">
                        <li className="flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                          <div className="flex-none">
                            <div className="h-20 w-20 rounded">
                              <Image
                                src={RelatedCourseImg}
                                alt="image"
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 font-semibold text-black">
                              How to Manage Ads For Clients The Right Way
                            </div>
                            <Link className="text-secondary font-semibold" href="#">
                              Read More
                            </Link>
                          </div>
                        </li>
                        <li className="flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                          <div className="flex-none">
                            <div className="h-20 w-20 rounded">
                              <Image
                                src={RelatedCourseImg1}
                                alt="course-image"
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 font-semibold text-black">
                              How to Manage Ads For Clients The Right Way
                            </div>
                            <Link className="text-secondary font-semibold" href="#">
                              Read More
                            </Link>
                          </div>
                        </li>
                        <li className="flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                          <div className="flex-none">
                            <div className="h-20 w-20 rounded">
                              <Image
                                src={RelatedCourseImg2}
                                alt="blog-img"
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="mb-1 font-semibold text-black">
                              How to Manage Ads For Clients The Right Way
                            </div>
                            <Link className="text-secondary font-semibold" href="#">
                              Read More
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="wdiget">
                      <h4 className="widget-title">Popular Tags</h4>
                      <ul className="flex flex-wrap">
                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Business
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Education
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Design
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Students
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Teachers
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Classroom
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Online
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            e-Learning
                          </Link>
                        </li>

                        <li className="mr-2 mb-2">
                          <Link
                            href="#"
                            className="bg-[#F8F8F8] px-3 py-1 rounded text-base transition-all duration-150 hover:bg-primary hover:text-white"
                          >
                            Book
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="wdiget">
                      <h4 className="widget-title">Instagram Feed</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Link href="#" className="group relative block h-20 w-full rounded">
                            <Image
                              src={BlogInstragramImg}
                              alt="blog-img"
                              className="block h-full w-full rounded object-cover"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </Link>
                        </div>

                        <div>
                          <Link href="#" className="group relative block h-20 w-full rounded">
                            <Image
                              src={BlogInstragramImg}
                              alt="blog-img"
                              className="block h-full w-full rounded object-cover"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </Link>
                        </div>

                        <div>
                          <Link href="#" className="group relative block h-20 w-full rounded">
                            <Image
                              src={BlogInstragramImg}
                              alt="blog-img"
                              className="block h-full w-full rounded object-cover"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </Link>
                        </div>

                        <div>
                          <Link href="#" className="group relative block h-20 w-full rounded">
                            <Image
                              src={BlogInstragramImg}
                              alt="blog-img"
                              className="block h-full w-full rounded object-cover"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </Link>
                        </div>

                        <div>
                          <Link href="#" className="group relative block h-20 w-full rounded">
                            <Image
                              src={BlogInstragramImg}
                              alt="blog-img"
                              className="block h-full w-full rounded object-cover"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </Link>
                        </div>

                        <div>
                          <Link href="#" className="group relative block h-20 w-full rounded">
                            <Image
                              src={BlogInstragramImg}
                              alt="blog-img"
                              className="block h-full w-full rounded object-cover"
                            />
                            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded bg-black bg-opacity-40 text-3xl text-white opacity-0 transition-all duration-150 group-hover:opacity-100">
                              <span className="scale-0 transition-all duration-150 group-hover:scale-100">
                                <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div> */}
        </div>
      )}
    </>
  );
}

export default SidebarWrapper;
