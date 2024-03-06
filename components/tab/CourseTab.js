"use client";
import Instructor from "@/components/courses/Instructor";
import Overview from "@/components/courses/Overview";
import Carriculum from "@/components/courses/Carriculum";
import { useState } from "react";
import Link from "next/link";

const CourseTab = ({ course }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <div className="nav-tab-wrapper mt-12">
        <ul id="tabs-nav" className="course-tab mb-8">
          <li>
            <Link
              href="javascript:void(0)"
              onClick={() => setOpenTab(1)}
              className={openTab === 1 ? "active-tab" : ""}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="javascript:void(1)"
              onClick={() => setOpenTab(2)}
              className={openTab === 2 ? "active-tab" : ""}
            >
              Carriculum
            </Link>
          </li>
          <li>
            <Link
              href="javascript:void(2)"
              onClick={() => setOpenTab(3)}
              className={openTab === 3 ? "active-tab" : ""}
            >
              Instructor
            </Link>
          </li>
          {/* <li>
                <Link
                    href="javascript:void(0)"
                    onClick={() => setOpenTab(4)}
                    className={openTab === 4 ? "active-tab" : ""}
                >
                    Reviews
                </Link>
                </li> */}
        </ul>
      </div>
      {/*----------- courses main tab content --------- */}
      <div className="tabs-main-content">
        {/*----------- courses overview content --------- */}
        <div className={openTab === 1 ? "block" : "hidden"}>
          <Overview course={course} />
        </div>
        {/*----------- courses carriculum content --------- */}
        <div className={openTab === 2 ? "block" : "hidden"}>
          <Carriculum totalLesson={course.lessons} sections={course.sections} />
        </div>
        {/*----------- courses instructor content --------- */}
        <div className={openTab === 3 ? "block" : "hidden"}>
          <Instructor instructor={course.instructor} />
        </div>
        {/*----------- courses reviews content --------- */}
        {/* <div className={openTab === 4 ? "block" : "hidden"}>
                      <Reviews />
                    </div> */}
      </div>
    </div>
  );
};

export default CourseTab;
