"use client";
import Image from "next/image";
import Link from "next/link";
import courseThumble from "/public/images/all-img/c1.png";

const CourseWidthCard = ({ lesson }) => {
  return (
    <>
      <Link
        className={`bg-white rounded-[8px] transition shadow-box7 duration-150 border-b-4 hover:border-primary border-transparent hover:shadow-box6 flex p-8 space-x-6 `}
        href="courses/single_course"
      >
        <div className="flex-none">
          <div className="w-[100px] lg:w-[180px] h-[100px] lg:h-[110px]  rounded relative">
            <Image
              src={courseThumble}
              alt="course-1"
              className="w-full h-full object-cover rounded-t-[8px]"
            />
          </div>
        </div>
        <div className="course-content flex-1 lg:flex-1">
          <div className="text-primary font-bold text-2xl mb-2 flex justify-between">
            <span className="inline-block">ddd</span>
            <span className="flex lg:flex">
              <span className="w-4 h-4 inline-block">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82819 3.13275L11.1988 5.87082C11.3331 6.13962 11.5923 6.32601 11.893 6.36914L14.959 6.81046C15.7165 6.91983 16.018 7.83791 15.4697 8.36396L13.2526 10.4943C13.0348 10.7038 12.9356 11.005 12.9871 11.3007L13.5103 14.3084C13.6392 15.0524 12.8473 15.62 12.1702 15.268L9.42991 13.847C9.16127 13.7076 8.83952 13.7076 8.57009 13.847L5.82975 15.268C5.15267 15.62 4.3608 15.0524 4.49043 14.3084L5.01288 11.3007C5.06443 11.005 4.96525 10.7038 4.74736 10.4943L2.53026 8.36396C1.98204 7.83791 2.28348 6.91983 3.041 6.81046L6.10699 6.36914C6.40765 6.32601 6.66771 6.13962 6.80203 5.87082L8.17181 3.13275C8.51074 2.45575 9.48926 2.45575 9.82819 3.13275Z"
                    stroke="#FF7E84"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="w-4 lg:w-2 h-4 inline-block">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82819 3.13275L11.1988 5.87082C11.3331 6.13962 11.5923 6.32601 11.893 6.36914L14.959 6.81046C15.7165 6.91983 16.018 7.83791 15.4697 8.36396L13.2526 10.4943C13.0348 10.7038 12.9356 11.005 12.9871 11.3007L13.5103 14.3084C13.6392 15.0524 12.8473 15.62 12.1702 15.268L9.42991 13.847C9.16127 13.7076 8.83952 13.7076 8.57009 13.847L5.82975 15.268C5.15267 15.62 4.3608 15.0524 4.49043 14.3084L5.01288 11.3007C5.06443 11.005 4.96525 10.7038 4.74736 10.4943L2.53026 8.36396C1.98204 7.83791 2.28348 6.91983 3.041 6.81046L6.10699 6.36914C6.40765 6.32601 6.66771 6.13962 6.80203 5.87082L8.17181 3.13275C8.51074 2.45575 9.48926 2.45575 9.82819 3.13275Z"
                    stroke="#FF7E84"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="w-4 h-4 inline-block">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82819 3.13275L11.1988 5.87082C11.3331 6.13962 11.5923 6.32601 11.893 6.36914L14.959 6.81046C15.7165 6.91983 16.018 7.83791 15.4697 8.36396L13.2526 10.4943C13.0348 10.7038 12.9356 11.005 12.9871 11.3007L13.5103 14.3084C13.6392 15.0524 12.8473 15.62 12.1702 15.268L9.42991 13.847C9.16127 13.7076 8.83952 13.7076 8.57009 13.847L5.82975 15.268C5.15267 15.62 4.3608 15.0524 4.49043 14.3084L5.01288 11.3007C5.06443 11.005 4.96525 10.7038 4.74736 10.4943L2.53026 8.36396C1.98204 7.83791 2.28348 6.91983 3.041 6.81046L6.10699 6.36914C6.40765 6.32601 6.66771 6.13962 6.80203 5.87082L8.17181 3.13275C8.51074 2.45575 9.48926 2.45575 9.82819 3.13275Z"
                    stroke="#FF7E84"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="w-4 h-4 inline-block">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.82819 3.13275L11.1988 5.87082C11.3331 6.13962 11.5923 6.32601 11.893 6.36914L14.959 6.81046C15.7165 6.91983 16.018 7.83791 15.4697 8.36396L13.2526 10.4943C13.0348 10.7038 12.9356 11.005 12.9871 11.3007L13.5103 14.3084C13.6392 15.0524 12.8473 15.62 12.1702 15.268L9.42991 13.847C9.16127 13.7076 8.83952 13.7076 8.57009 13.847L5.82975 15.268C5.15267 15.62 4.3608 15.0524 4.49043 14.3084L5.01288 11.3007C5.06443 11.005 4.96525 10.7038 4.74736 10.4943L2.53026 8.36396C1.98204 7.83791 2.28348 6.91983 3.041 6.81046L6.10699 6.36914C6.40765 6.32601 6.66771 6.13962 6.80203 5.87082L8.17181 3.13275C8.51074 2.45575 9.48926 2.45575 9.82819 3.13275Z"
                    stroke="#FF7E84"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </span>
          </div>
          <h4 className="text-sm lg:text-xl leading-[25px] mb-4 font-bold">
            Basic Fundamentals of Interior &amp; Graphics Design
          </h4>
          <div className="flex space-x-6">
            <span className="flex items-center space-x-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.0534 2.07229H6.06369C4.50369 2.06629 3.22494 3.30979 3.18819 4.86904V12.9038C3.15369 14.4885 4.40994 15.8018 5.99469 15.837C6.01794 15.837 6.04044 15.8378 6.06369 15.837H12.0554C13.6259 15.7733 14.8634 14.4758 14.8522 12.9038V6.02929L11.0534 2.07229Z"
                  stroke="#FF7E84"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.8594 2.0625V4.24425C10.8594 5.30925 11.7204 6.1725 12.7854 6.1755H14.8516"
                  stroke="#FF7E84"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.7141 11.5195H6.66406"
                  stroke="#FF7E84"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.18106 8.70508H6.66406"
                  stroke="#FF7E84"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>2 Lessons</span>
            </span>
            <span className="flex items-center space-x-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.1625 10.87C9.0625 10.86 8.9425 10.86 8.8325 10.87C6.4525 10.79 4.5625 8.84 4.5625 6.44C4.5625 3.99 6.5425 2 9.0025 2C11.4525 2 13.4425 3.99 13.4425 6.44C13.4325 8.84 11.5425 10.79 9.1625 10.87Z"
                  stroke="#30BEAD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.4112 4C18.3512 4 19.9112 5.57 19.9112 7.5C19.9112 9.39 18.4113 10.93 16.5413 11C16.4613 10.99 16.3713 10.99 16.2812 11"
                  stroke="#30BEAD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.15875 14.56C1.73875 16.18 1.73875 18.82 4.15875 20.43C6.90875 22.27 11.4188 22.27 14.1688 20.43C16.5888 18.81 16.5888 16.17 14.1688 14.56C11.4288 12.73 6.91875 12.73 4.15875 14.56Z"
                  stroke="#30BEAD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3438 20C19.0638 19.85 19.7437 19.56 20.3037 19.13C21.8637 17.96 21.8637 16.03 20.3037 14.86C19.7537 14.44 19.0838 14.16 18.3738 14"
                  stroke="#30BEAD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>4k Lesson</span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};
export default CourseWidthCard;
