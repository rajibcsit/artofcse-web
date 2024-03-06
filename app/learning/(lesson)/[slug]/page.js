import LessonFooter from "@/components/LessonFooter";
import { LoadingScreenLesson } from "@/components/loding/LoadingScreenLesson";
import LessonAPI from "@/data/lessons";
import fbSvg from "@/public/images/svg/fb.svg";
import insSvg from "@/public/images/svg/ins.svg";
import pnSvg from "@/public/images/svg/pn.svg";
import twSvg from "@/public/images/svg/tw.svg";
import Image from "next/image";
import Link from "next/link";
export async function generateMetadata({ params }) {
  //Get from Api
  const lesson = await LessonAPI.SingleLesson(params.slug);

  return {
    title: lesson.title,
    keywords: lesson.keywords,
    description: lesson.description,
    openGraph: {
      title: lesson.title,
      description: lesson.description,
    },
    twitter: {
      title: lesson.title,
      description: lesson.description,
    },
  };
}

export default async function Lession({ params }) {
  const isLoading = false;
  const lesson = await LessonAPI.SingleLesson(params.slug);
  return (
    <>
      <div className=" flex  w-full h-[40px] z-[15] ml-[40px] mt-20 bg-slate-100 fixed left-0 top-0 lg:hidden lession-menu">
        <div className="flex-initial"></div>
        <div className="flex-auto mb-3 mt-3">
          <h4 className="text-base mb-3 font-bold items-center mr-2">{lesson.title}</h4>
        </div>
      </div>

      {/*====================== Add Sidebar component here ======================*/}

      <div className="flex-auto lesson-area h-screen wrapper justify-center sm:justify-center md:justify-center lg:justify-center sm:w-16">
        {isLoading ? (
          <LoadingScreenLesson />
        ) : (
          <div className="flex bg-[rgb(243,243,236)] justify-center pb-8 pt-4 p-4">
            <div className="container">
              <h1 className="text-xl mb-3 mt-3 font-bold lession-title">{lesson.title}</h1>
              {/*----------- Start Coding for Author meta--------------- */}
              <div className="flex space-x-4 group mb-5">
                <div className="flex-1">
                  <span className="text-secondary">
                    Trainer:
                    <Link href="#" className="text-black">
                      {lesson.instructor}
                    </Link>
                  </span>
                </div>
                <div className="justify-self-end">
                  <span className="text-secondary">
                    Last Update:
                    <Link href="#" className="text-black">
                      {lesson.date}
                    </Link>
                  </span>
                </div>
              </div>
              {/*----------- Start Coding for Video content link --------------- */}
              {lesson.youtube && (
                <div className="embed-responsive embed-responsive-21by9 aspect-w-16 aspect-h-9">
                  <iframe
                    className="h-full w-full rounded-lg"
                    src={lesson.youtube}
                    title={lesson.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              {/*coding for next and previous video button */}
              {lesson.youtube && (
                <div className="flex space-x-4 group mb-5 mt-5">
                  <div className="flex-1">
                    {lesson.previous_lesson ? (
                      <>
                        <Link
                          href={`/learning/${lesson.previous_lesson}`}
                          className="btn btn-primary inline-flex items-center space-x-[10px] py-2"
                        >
                          <span className="relative top-1">
                            <iconify-icon icon="mingcute:arrow-left-fill"></iconify-icon>
                          </span>
                          <span>Previous </span>
                        </Link>
                      </>
                    ) : null}
                  </div>

                  <div className="justify-self-end">
                    {lesson.next_lesson ? (
                      <>
                        <Link
                          href={`/learning/${lesson.next_lesson}`}
                          className="btn btn-primary inline-flex items-center space-x-[10px] py-2"
                        >
                          <span>Next </span>
                          <span className="relative top-1">
                            <iconify-icon icon="mingcute:arrow-right-fill"></iconify-icon>
                          </span>
                        </Link>
                      </>
                    ) : null}
                  </div>
                </div>
              )}

              {/*coding for  video social share */}
              <div className="flex justify-end mt-3">
                <ul className="flex space-x-4 items-center pt-3">
                  <li className="text-black font-semibold">Share On:</li>
                  <li>
                    <Link
                      href={`https://www.facebook.com/sharer.php?u://www.artofcse.com/learning/${lesson.slug}`}
                      className="flex h-10 w-10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={fbSvg} alt="fb" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://twitter.com/share?url://www.artofcse.com/learning/${lesson.slug}`}
                      className="flex h-10 w-10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={twSvg} alt="twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://pinterest.com/pin/create/bookmarklet/?media://www.artofcse.com/learning/${lesson.slug}`}
                      className="flex h-10 w-10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={pnSvg} alt="pinterest" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`https://www.instagram.com/sharer.php?u://www.artofcse.com/learning/${lesson.slug}`}
                      className="flex h-10 w-10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image src={insSvg} alt="instagram" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-3" dangerouslySetInnerHTML={{ __html: lesson.description }}></div>
            </div>
          </div>
        )}
        <LessonFooter />
      </div>
    </>
  );
}
