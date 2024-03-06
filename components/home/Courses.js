"use client";
import CourseCard from "@/components/cards/CourseCard";
import { LoaderScreenCourseLists } from "@/components/loding/LoaderScreenCourseLists";
import CourseAPI from "@/data/courses";
import Link from "next/link";
import { useEffect, useState } from "react";
function Courses() {
  const [courses, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //Load all post here
  useEffect(() => {
    getTopCourses();
  }, []);
  //get All Post here from API

  const getTopCourses = async () => {
    const courses = await CourseAPI.TopCourses("video");
    setCourse(courses);
    setIsLoading(false);
  };
  return (
    <div>
      <>
        <div className="section-padding course-area">
          <div className="container">
            <div className="text-center">
              <div className="mini-title">Popular Courses</div>
              <div className="column-title">
                Choose Our Top
                <span className="shape-bg">Courses</span>
              </div>
            </div>
            {isLoading ? (
              <LoaderScreenCourseLists />
            ) : (
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                {/* Start Codeing for course card */}
                {courses.map((course) => {
                  return <CourseCard key={course.id} course={course} />;
                })}
              </div>
            )}
            {/*  view course more button */}
            <div className="text-center lg:pt-16 pt-10">
              <Link href="/learning/video" className="btn btn-primary">
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Courses;
