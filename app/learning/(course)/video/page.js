import CourseCard from "@/components/cards/CourseCard.js";
// import { LoaderScreenCourseLists } from "@/components/loding/LoaderScreenCourseLists";
import Link from "next/link";
import CourseAPI from "@/data/courses";

let title = "Art of CSE Courses Videos | Master Computer Science with Engaging Tutorials";
let keywords =
  "CSE Courses Videos, Computer Science Tutorials, Programming Video Lessons, Online Learning Resources";
let description =
  "Immerse yourself in the world of computer science with Art of CSE's Courses Videos. Our comprehensive collection of video tutorials offers a dynamic learning experience, covering a range of topics in programming and computer science. Elevate your skills and knowledge through engaging lessons designed to enhance your learning journey.";

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

export default async function Courses() {
  //get from API
  const courses = await CourseAPI.getCourses("video");

  return (
    <div>
      <>
        <div className="breadcrumbs section-padding bg-[url('../public/images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
          <div className="container text-center">
            <h2>Courses</h2>
            <nav>
              <ol className="flex items-center justify-center space-x-3">
                <li className="breadcrumb-item">
                  <Link href="#">Pages </Link>
                </li>
                <li className="breadcrumb-item">-</li>
                <li className="text-primary">Courses</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* courses main content */}

        <div className="nav-tab-wrapper tabs pt-10 section-padding-bottom course-area">
          <div className="container">
            <div className="mt-5">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
                {courses.map((course) => {
                  return <CourseCard key={course.id} course={course} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
