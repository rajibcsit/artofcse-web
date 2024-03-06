import Image from "next/image";
import adminSvg from "@/public/images/svg/user.svg";
import calenderSvg from "@/public/images/svg/calender.svg";
import ckSvg from "@/public/images/svg/ck.svg";
import commentsSvg from "@/public/images/svg/comments.svg";
import fbSvg from "@/public/images/svg/fb.svg";
import twSvg from "@/public/images/svg/tw.svg";
import pnSvg from "@/public/images/svg/pn.svg";
import insSvg from "@/public/images/svg/ins.svg";
import BlogAPI from "@/data/blogs";
import Link from "next/link";
// import { LoaderScreenBlogDetails } from "@/components/loding/LoaderScreenBlogDetails";

export async function generateMetadata({ params }) {
  //Get from Api
  const blog = await BlogAPI.SingleBlog(params.slug);

  return {
    title: blog.title,
    keywords: blog.keywords,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
    },
    twitter: {
      title: blog.title,
      description: blog.description,
    },
  };
}
export default async function BlogSingle({ params }) {
  //get All Post here from API
  const blog = await BlogAPI.SingleBlog(params.slug);
  return (
    <div>
      <>
        <div className="grid grid-cols-12 gap-[30px] content-margin pb-10 pt-10">
          <div className="lg:col-span-12 col-span-12">
            <div className="bg-[#F8F8F8] rounded-md">
              <Image
                src={blog.feature_image}
                width={750}
                height={100}
                className="rounded-t-md mb-10"
                alt="blog-image"
              />
              <div className="px-10 pb-10">
                <div className="flex flex-wrap xl:space-x-10 space-x-5 mt-6 mb-6">
                  <Link className="flex items-center space-x-2" href="#">
                    <Image src={adminSvg} alt="admin-image" />
                    <span>{blog.user_name}</span>
                  </Link>
                  <Link className="flex items-center space-x-2" href="#">
                    <Image src={calenderSvg} alt="calender" />
                    <span>{blog.created_at}</span>
                  </Link>
                  <Link className="flex items-center space-x-2" href="#">
                    <Image src={ckSvg} alt="course time" />
                    <span>3 Min Read</span>
                  </Link>
                  <Link className="flex items-center space-x-2" href="#">
                    <Image src={commentsSvg} alt="Comments" />
                    <span>02 Comments</span>
                  </Link>
                </div>
                <h3>{blog.title}</h3>
                <p className="mt-6" dangerouslySetInnerHTML={{ __html: blog.description }}></p>

                <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 md:mt-14 mt-8">
                  <ul className="flex items-center space-x-3">
                    <li className="text-black font-semibold">Tags:</li>
                    {blog.tags.map((tag) => {
                      return (
                        <li key={tag.slug}>
                          <Link href="#" className="px-3 py-1 bg-white rounded hover:text-primary">
                            {tag.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <ul className="flex space-x-3 xl:justify-end items-center">
                    <li className="text-black font-semibold">Share On:</li>
                    <li>
                      <Link
                        href={`https://www.facebook.com/sharer.php?u=https://www.artofcse.com/blog/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8"
                      >
                        <Image src={fbSvg} alt="fb" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://twitter.com/share?url=https://www.artofcse.com/blog/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8"
                      >
                        <Image src={twSvg} alt="twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://pinterest.com/pin/create/bookmarklet/?media=https://www.artofcse.com/blog/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8"
                      >
                        <Image src={pnSvg} alt="pinterest" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`https://www.instagram.com/sharer.php?u=https://www.artofcse.com/blog/${blog.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-8 w-8"
                      >
                        <Image src={insSvg} alt="instagram" />
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*----------- related post  --------*/}
                {/* <div className="grid xl:grid-cols-2 grid-cols-1 gap-[30px] md:mt-14 mt-8">
                        <Link className="flex space-x-4 shadow-box7 rounded p-5 bg-white" href="#">
                          <div className="flex-none">
                            <div className="h-20 w-20 rounded">
                              <Image
                                src={reviewsingleImg}
                                alt="blog-image"
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <span className="text-primary text-base mb-1">Prev Post</span>
                            <div className="mb-1 font-semibold text-black">
                              How Technology Can Help You Stay Healthy
                            </div>
                          </div>
                        </Link>

                        <Link
                          className="flex flex-row-reverse shadow-box7 bg-white rounded p-5"
                          href="#"
                        >
                          <div className="flex-none">
                            <div className="h-20 w-20 rounded ml-4">
                              <Image
                                src={reviewsingleImg}
                                alt="blog-img"
                                className="w-full h-full object-cover rounded"
                              />
                            </div>
                          </div>
                          <div className="flex-1 text-right">
                            <span className="text-primary text-base mb-1">Next Post</span>
                            <div className="mb-1 font-semibold text-black">
                              How Technology Can Help You Stay Healthy
                            </div>
                          </div>
                        </Link>
                      </div> */}
              </div>
            </div>

            {/*----------- comments start  --------*/}
            {/* <div className="mt-14">
                    <h3 className="mb-6">3 Comments</h3>
                    <ul className="comments space-y-4">
                      <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                        <div className="flex">
                          <div className="flex-none">
                            <div className="h-[72px] w-[72px] rounded-full mr-6">
                              <Image
                                src={reviewImage1}
                                alt="blog-img"
                                className="w-full block h-full object-contain rounded-full"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap justify-between mb-2">
                              <div>
                                <span className="text-xl font-semibold text-black block mb-1">
                                  Ferira Watson
                                </span>
                                <span className="block">Oct 09, 2021</span>
                              </div>
                              <Link
                                href="#"
                                className="inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px] items-center space-x-2 leading-[1]"
                              >
                                <span className="text-xl leading-[1] top-[3px] relative">
                                  <iconify-icon icon="charm:forward" rotate="180deg"></iconify-icon>
                                </span>
                                <span className="leading-[1]">Reply</span>
                              </Link>
                            </div>
                            <p>
                              There are many variations of passages of Lorem Ipsum available, but
                              the majority have suffered alteration in some form
                            </p>
                          </div>
                        </div>
                        <ul className="comments mt-6 space-y-4 ml-14 border-t border-[#ECECEC]">
                          <li className="block border-b border-[#ECECEC] pb-6 mt-6 last:border-0 last:pb-0">
                            <div className="flex">
                              <div className="flex-none">
                                <div className="h-[72px] w-[72px] rounded-full mr-6">
                                  <Image
                                    src={reviewImage1}
                                    alt="blog-img"
                                    className="w-full block h-full object-contain rounded-full"
                                  />
                                </div>
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap justify-between mb-2">
                                  <div>
                                    <span className="text-xl font-semibold text-black block mb-1">
                                      Ferira Watson
                                    </span>
                                    <span className="block">Oct 09, 2021</span>
                                  </div>
                                  <Link
                                    href="#"
                                    className="inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px] items-center space-x-2 leading-[1]"
                                  >
                                    <span className="text-xl leading-[1] top-[3px] relative">
                                      <iconify-icon
                                        icon="charm:forward"
                                        rotate="180deg"
                                      ></iconify-icon>
                                    </span>
                                    <span className="leading-[1]">Reply</span>
                                  </Link>
                                </div>
                                <p>
                                  There are many variations of passages of Lorem Ipsum available,
                                  but the majority have suffered alteration in some form
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="block">
                        <div className="flex">
                          <div className="flex-none">
                            <div className="h-[72px] w-[72px] rounded-full mr-6">
                              <Image
                                src={reviewImage1}
                                alt="blog-img"
                                className="w-full block h-full object-contain rounded-full"
                              />
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap justify-between mb-2">
                              <div>
                                <span className="text-xl font-semibold text-black block mb-1">
                                  Ferira Watson
                                </span>
                                <span className="block">Oct 09, 2021</span>
                              </div>
                              <Link
                                href="#"
                                className="inline-flex px-3 py-1 rounded text-secondary bg-[#E3F9F6] hover:text-white hover:bg-secondary h-[35px] items-center space-x-2 leading-[1]"
                              >
                                <span className="text-xl leading-[1] top-[3px] relative">
                                  <iconify-icon icon="charm:forward" rotate="180deg"></iconify-icon>
                                </span>
                                <span className="leading-[1]">Reply</span>
                              </Link>
                            </div>
                            <p>
                              There are many variations of passages of Lorem Ipsum available, but
                              the majority have suffered alteration in some form
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div> */}

            {/*----------- Reply start  --------*/}
            {/* <div className="mt-14">
                    <h3 className="mb-4">Leave A Reply</h3>
                    <div>Your email address will not be published. Requires fields are marked*</div>
                    <div className="md:grid-cols-2 grid grid-cols-1 gap-[30px] mt-6">
                      <div>
                        <input type="text" className="from-control" placeholder="Name*" />
                      </div>
                      <div>
                        <input type="email" className="from-control" placeholder="Email*" />
                      </div>
                      <div className="md:col-span-2 col-span-1">
                        <input type="url" className="from-control" placeholder="Website Address" />
                      </div>
                      <div className="md:col-span-2 col-span-1">
                        <textarea
                          className="from-control"
                          placeholder="Your Message*"
                          rows="5"
                        ></textarea>
                      </div>
                    </div>
                    <button className="btn btn-primary mt-[30px]">Post Comment</button>
                  </div> */}
          </div>
        </div>
      </>
    </div>
  );
}
