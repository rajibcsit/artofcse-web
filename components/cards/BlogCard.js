"use client";
import calenderSvg from "@/public/images/svg/calender.svg";
import adminSvg from "@/public/images/svg/user3.svg";
import Image from "next/image";
import Link from "next/link";
const Card = ({ blog }) => {
  return (
    <>
      <div className="bg-white shadow-box12 rounded-[8px] transition duration-100 hover:shadow-box13">
        <div className="course-thumb h-[260px] rounded-t-[8px] relative">
          <Image
            src={blog.feature_image}
            width={600}
            height={600}
            className="w-full h-full object-cover rounded-t-[8px]"
            alt="blog-image"
          />
          <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
            {blog.blog_category}
          </span>
        </div>
        <div className="course-content p-8">
          <div className="flex lg:space-x-10 space-x-5 mb-5">
            <Link className="flex items-center space-x-2" href="#">
              <Image src={adminSvg} alt="admin" />

              <span>{blog.user_name}</span>
            </Link>
            <Link className="flex items-center space-x-2" href="#">
              <Image src={calenderSvg} alt="calender" />

              <span>{blog.created_at}</span>
            </Link>
          </div>
          <h4 className="text-xl mb-5 font-bold">
            <Link
              href={`/blog/${blog.slug}`}
              className="hover:text-primary transition duration-150"
            >
              {blog.title}
            </Link>
          </h4>
          <Link
            href={`/blog/${blog.slug}`}
            className="text-black font-semibold hover:underline transition duration-150"
          >
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};
export default Card;
