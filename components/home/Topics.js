import Image from "next/image";
import topicsImg1 from "/public/images/svg/t1.svg";
import topicsImg2 from "/public/images/svg/t2.svg";
import topicsImg3 from "/public/images/svg/t3.svg";
import topicsImg4 from "/public/images/svg/t4.svg";
import topicsImg5 from "/public/images/svg/t5.svg";
import topicsImg6 from "/public/images/svg/t6.svg";
import topicsImg7 from "/public/images/svg/t7.svg";
import topicsImg8 from "/public/images/svg/t8.svg";
import Link from "next/link";

function Topics() {
  return (
    <div>
      <>
        <div className="section-padding">
          <div className="container">
            <div className="text-center">
              <div className="mini-title">Start Learning From Today</div>
              <div className="column-title">
                Popular
                <span className="shape-bg">Topics</span>
                To Learn
              </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFE8E8] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                  <Image
                    src={topicsImg1}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Data Science</h4>
                  <p>68 Courses</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-green-paste text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-green-paste">
                  <Image
                    src={topicsImg2}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">UI/UX Design</h4>
                  <p>UI/UX Design</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#E8F5FF] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#E8F5FF]">
                  <Image
                    src={topicsImg3}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Modern Physics</h4>
                  <p>68 Courses</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#E3F9F6] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#E3F9F6]">
                  <Image
                    src={topicsImg4}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Music Production</h4>
                  <p>68 Courses</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#EEE8FF] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#EEE8FF]">
                  <Image
                    src={topicsImg5}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Data Science</h4>
                  <p>45 Courses</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFF6EB] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFF6EB]">
                  <Image
                    src={topicsImg6}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Finances</h4>
                  <p>68 Courses</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#E8FFEA] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#E8FFEA]">
                  <Image
                    src={topicsImg7}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Global Science</h4>
                  <p>75 Courses</p>
                </div>
              </Link>

              <Link
                className="rounded-[8px] transition duration-100 hover:shadow-box hover:bg-white group bg-[#FFE8E8] text-center px-6 py-[65px] hover:-translate-y-2"
                href="#"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-white relative mx-auto flex flex-col justify-center items-center mb-8 group-hover:bg-[#FFE8E8]">
                  <Image
                    src={topicsImg8}
                    alt="topics image"
                    className="w-[32px] h-[32px] object-cover"
                  />
                </div>
                <div className="course-content">
                  <h4 className="text-2xl mb-2 font-bold">Game Design</h4>
                  <p>12 Courses</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Topics;
