"use client";
import BlogCard from "@/components/cards/BlogCard.js";
import Link from "next/link";
import { useEffect, useState } from "react";
import axiosInstance from "@/app/axios/axiosInstance";

function Blogs() {
  const [blogs, setBlog] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Load all post here
  useEffect(() => {
    getAllBlogs();
  }, []);
  //get All Post here from API
  const getAllBlogs = async () => {
    try {
      await axiosInstance.get("/blogs").then((res) => {
        setBlog(res.data.data);
        setIsLoading(false);
      });
    } catch (error) {}
  };
  return (
    <div>
      <>
        <div className="section-padding bg-[url('../public/images/all-img/section-bg-5.png')] bg-cover bg-no-repeat bg-center">
          <div className="container">
            <div className="lg:flex justify-between items-center">
              <div className="mb-3">
                <div className="mini-title">Team Member</div>
                <div className="column-title">
                  Our Latest
                  <span className="shape-bg">Blogs</span>
                </div>
              </div>
              <div className="mb-3">
                <Link href="#" className="btn btn-primary">
                  Read All Blogs
                </Link>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-7">
              {blogs.map((blog) => {
                return <BlogCard key={blog.id} blog={blog} />;
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Blogs;
