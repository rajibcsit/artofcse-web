"use client";
import Image from "next/image";
import Link from "next/link";

const Card = ({ course }) => {
  return (
    <>
      <div className={`bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm`}>
        <Link href={`/learning/video/${course.slug}`}>
          <div className="course-thumb h-[248px] rounded-t-[8px] relative">
            <Image
              src={course.image}
              alt="courses-img"
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-t-[8px]"
            />
            <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">
              <span> {course.lessons} Lessons</span>
            </span>
          </div>
          <div className="course-content p-8">
            {/* <div className="text-secondary font-bold text-2xl mb-3">$29.28</div> */}
            <h4 className="text-xl mb-3 font-bold">{course.title}</h4>
            <div className="flex justify-between flex-wrap space-y-1 xl:space-y-0">
              <p className="mt-4 text-justify">{course.short_description}</p>
              {/* <span className="flex items-center space-x-2 mr-3">
                <Image src={fileSvg} alt="svg" />

                <span>2 Lessons</span>
              </span>
              <span className="flex items-center space-x-2 mr-3">
                <Image src={clockSvg} alt="svg" />

                <span>4h 30m</span>
              </span>
              <span className="flex items-center space-x-2">
                <Image src={starSvg} alt="svg" />

                <span>4.8</span>
              </span> */}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
export default Card;
