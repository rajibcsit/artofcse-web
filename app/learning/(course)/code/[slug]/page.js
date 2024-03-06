import CourseDetails from "@/components/courses/CourseDetails";
import Image from "next/image";
import Link from "next/link";
import CourseAPI from "@/data/courses";
import CourseTab from "@/components/tab/CourseTab";

export async function generateMetadata({ params }) {
  //Get from Api
  const course = await CourseAPI.getCourseDetails("code", params.slug);

  return {
    title: course.title,
    keywords: course.keywords,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
    },
    twitter: {
      title: course.title,
      description: course.description,
    },
  };
}

export default async function SingleCourse({ params }) {
  //Get from Api
  const course = await CourseAPI.getCourseDetails("code", params.slug);
  return (
    <>
      <div className="breadcrumbs section-padding bg-[url('../public/images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
        <div className="container text-center">
          <h2>Course Details</h2>
          <nav>
            <ol className="flex items-center justify-center space-x-3">
              <li className="breadcrumb-item">
                <Link href="#">Pages </Link>
              </li>
              <li className="breadcrumb-item">-</li>
              <li className="text-primary">Course Details</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="nav-tab-wrapper tabs pt-10 pb-10">
        {course ? (
          <div className="container">
            <div className="grid grid-cols-12 gap-[30px]">
              <div className="lg:col-span-8 col-span-12">
                <div className="single-course-details">
                  <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                    <Image
                      src={course.image}
                      width={300}
                      height={300}
                      alt="course-thumb"
                      className="rounded-md object-fut w-full h-full block"
                    />
                  </div>
                  <div className="mb-6">
                    <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white">
                      Data Science
                    </span>
                  </div>
                  <h2>{course.title}</h2>
                  <div className="author-meta mt-6 sm:flex lg:space-x-16 sm:space-x-5 space-y-5 sm:space-y-0 items-center">
                    <div className="flex space-x-4 items-center group">
                      <div className="flex-none">
                        <div className="h-12 w-12 rounded">
                          <Image
                            src={course.instructor.thumbnail}
                            width={50}
                            height={50}
                            alt="auth-image"
                            className="object-cover w-full h-full rounded"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className="text-secondary">
                          Trainer
                          <Link href="#" className="text-black">
                            : {course.instructor.name}
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-secondary">
                        Last Update:
                        <Link href="#" className="text-black">
                          {course.date}
                        </Link>
                      </span>
                    </div>
                  </div>

                  {/*------------- courses tab content-----------*/}
                  <CourseTab course={course} />
                </div>
              </div>
              {/*-------------  courses details section ---------*/}
              <div className="lg:col-span-4 col-span-12">
                <CourseDetails course={course} />
              </div>
            </div>
          </div>
        ) : (
          <p>Course not found</p>
        )}
      </div>
    </>
  );
}
