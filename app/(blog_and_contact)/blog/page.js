import BlogCard from "@/components/cards/BlogCard.js";
import Link from "next/link";
// import { LoaderScreenBlogLists } from "@/components/loding/LoaderScreenBlogLists";
import BlogAPI from "@/data/blogs";

let title = "Art of CSE Blog: Insights, Tutorials, and Updates on Computer Science Education";
let keywords =
  "Computer Science Blog, CSE Insights, Programming Tutorials, Tech Updates, Learning Resources";
let description =
  "Explore the Art of CSE Blog for valuable insights, in-depth tutorials, and the latest updates in the world of computer science education. Stay informed, learn new skills, and dive into the dynamic landscape of programming and technology through our engaging blog posts";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
    // images: ["../images/banner/1.png"],
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default async function Blogs() {
  //get All Post here from API
  const blogs = await BlogAPI.AllBlogs();

  return (
    <>
      <>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
          {blogs.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
        {/*........... Blog Categories section --------------*/}
        {/* <div className="pagination mt-14">
            <ul className="flex justify-center space-x-3">
              <li className="inline-flex">
                <Link
                  href="#"
                  className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                >
                  <iconify-icon
                    icon="heroicons:chevron-double-left-20-solid"
                    className="text-2xl"
                  ></iconify-icon>
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="flex w-12 h-12 flex-col items-center justify-center bg-primary text-white rounded font-semibold"
                >
                  1
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                >
                  2
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                >
                  3
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                >
                  4
                </Link>
              </li>
              <li className="inline-flex">
                <Link
                  href="#"
                  className="flex w-12 h-12 flex-col items-center justify-center bg-[#ECECEC] rounded font-semibold"
                >
                  <iconify-icon
                    icon="heroicons:chevron-double-right-20-solid"
                    className="text-2xl"
                  ></iconify-icon>
                </Link>
              </li>
            </ul>
          </div> */}
      </>
    </>
  );
}
