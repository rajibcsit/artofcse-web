"use client";
import Sidebar from "@/components/lession/SideNav";
import { LoadingScreenLessonLists } from "@/components/loding/loaderScreenLessonLists";
import LessonAPI from "@/data/lessons";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LayoutLesson({ children }) {
  const [lesson, setLesson] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const params = useParams();
  //Load all post here
  useEffect(() => {
    getAllLessons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //get SingleLesson here from API

  const getAllLessons = async () => {
    const lesson = await LessonAPI.AllLessons(params.slug);
    setLesson(lesson);
    setIsLoading(false);
  };
  
  return (
    <>
      <div className="flex mt-20">
        <div className="flex-none overflow-y-scroll h-screen fixed left-0 sidebar lesson-sidebar z-10">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            id="toggleMenu"
            className="toggle_menu fixed z-[8] w-10"
          >
            <svg
              className="text-black bg-slate-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <nav
            className={`vertical-nav pb-24 ease-in-out duration-300 lg:block ${
              open ? "block" : "hidden"
            }`}
          >
            {isLoading ? (
              <LoadingScreenLessonLists />
            ) : (
              <Sidebar
                courseType={lesson.course.course_type}
                courseSlug={lesson.course.slug}
              />
            )}
          </nav>
        </div>
        {children}
      </div>
    </>
  );
}
