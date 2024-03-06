"use client";

import cameraSvg from "@/public/images/svg/camera.svg";
import LessonAPI from "@/data/lessons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LoadingScreenLessonLists } from "../loding/loaderScreenLessonLists";

const SideBar = ({ courseType, courseSlug }) => {
  const currentRoute = usePathname();

  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef("");

  const [course, setCourse] = useState(undefined);
  const [loading, setLoading] = useState(true);

  //Load all post here
  useEffect(() => {
    getCourseLesson();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCourseLesson = async () => {
    const lesson = await LessonAPI.CourseLessons(courseType, courseSlug);
    setCourse(lesson);
    setLoading(false);
  };

  //Search query for lesson
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Check if `course` and `course.sections` are defined
  const filteredLessons =
    course?.sections?.flatMap((section) =>
      section.lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    ) || [];

  return (
    <>
      {loading ? (
        <LoadingScreenLessonLists />
      ) : (
        <>
          <div className="flex lg:flex card-img p-1">
            <Image src={course.image} width={80} height={80} alt="image" className="p-1" />

            <div className="flex flex-col justify-start p-1">
              <h5 className="text-gray-900 text-sm font-semibold mb-2">{course.title}</h5>
              <p className="text-gray-600 text-xs">
                by: <span className="text-sm font-semibold ">{course.instructor.name}</span>
              </p>
            </div>
          </div>

          <div className={`searchBoxWrapper ${focus ? "active" : ""}`}>
            <div
              className="searchBox"
              onClick={() => {
                searchRef.current.focus();
              }}
            >
              <iconify-icon icon="material-symbols:search" />

              <input
                type="text"
                ref={searchRef}
                placeholder="Search"
                className="border-none focus:ring-0"
                onChange={handleSearchInputChange}
              />
            </div>
          </div>

          {filteredLessons.length > 0 ? (
            course.sections.map((section) => (
              <ul key={section.id} className="list lession-accrodain mt-2">
                {/*--------------------- lession list sub title----------- */}
                <h4 className="text-lg justify-center py-1 pl-3 bg-slate-300">{section.title}</h4>
                {/*------------------ lession list items----------- */}
                {section.lessons
                  .filter((lesson) => filteredLessons.includes(lesson))
                  .map((lesson) => (
                    <li key={lesson.id}>
                      <div className="lesson-sidebar-item">
                        <Link
                          href={`/learning/${lesson.slug}`}
                          className={`flex items-center p-1 border-b border-[#d2d9e0] ${
                            currentRoute === `/learning/${lesson.slug}` ? "bg-[#D7EBE9] " : ""
                          }`}
                        >
                          <div className="flex-1 flex items-center justify-center">
                            <span className="flex-none mr-2">
                              <Image src={cameraSvg} alt="lesson file" />
                            </span>
                            <span className="flex-1 text-sm">{lesson.title}</span>
                          </div>
                        </Link>
                      </div>
                    </li>
                  ))}
              </ul>
            ))
          ) : (
            // Display a message when no lessons match the search
            <p>No lessons found.</p>
          )}
        </>
      )}
    </>
  );
};

export default SideBar;
