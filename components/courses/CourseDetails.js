import Image from "next/image";
import CoursesDetailsImg from "/public/images/all-img/thumb.png";
import reviewImg from "/public/images/all-img/rc-1.png";
import reviewImg2 from "/public/images/all-img/rc-2.png";
import reviewImg3 from "/public/images/all-img/rc-3.png";
import playSvg from "@/public/images/svg/play.svg";
import instructorSvg from "@/public/images/svg/user.svg";
import lecturesSvg from "@/public/images/svg/file.svg";
import durationSvg from "@/public/images/svg/clock.svg";
import StarSvg from "@/public/images/svg/star.svg";
import lightSvg from "@/public/images/svg/light.svg";
import WebSvg from "@/public/images/svg/web.svg";
import Link from "next/link";
const CourseDetails = ({ course }) => {
  return (
    <div>
      <>
        <div className="sidebarWrapper space-y-[30px]">
          <div className="wdiget custom-text space-y-5">
            <Link className="h-[220px] rounded relative block" href="#">
              <Image
                src={CoursesDetailsImg}
                className="block w-full h-full object-cover rounded"
                alt="image"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={playSvg} alt="Play-svg" />
              </div>
            </Link>
            <h3>Free</h3>
            <button className="btn btn-primary w-full text-center">Enroll Now</button>
            <ul className="list">
              <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                <div className="flex-1 space-x-3 flex">
                  <Image src={instructorSvg} alt="Instructor-svg" />
                  <div className="text-black font-semibold">Instructor</div>
                </div>
                <div className="flex-none">{course.instructor.name}</div>
              </li>

              <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                <div className="flex-1 space-x-3 flex">
                  <Image src={lecturesSvg} alt="Lectures-svg" />
                  <div className="text-black font-semibold">Lectures</div>
                </div>
                <div className="flex-none">{course.lessons}</div>
              </li>

              {/* <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                <div className="flex-1 space-x-3 flex">
                  <Image src={durationSvg} alt="Lectures-svg" />
                  <div className="text-black font-semibold">Duration</div>
                </div>
                <div className="flex-none">2Hr 36Minutes</div>
              </li> */}

              {/* <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                <div className="flex-1 space-x-3 flex">
                  <Image src={StarSvg} alt="Enrolled-svg" />

                  <div className="text-black font-semibold">Enrolled</div>
                </div>
                <div className="flex-none">2k Students</div>
              </li> */}

              <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                <div className="flex-1 space-x-3 flex">
                  <Image src={lightSvg} alt="Course level" />

                  <div className="text-black font-semibold">Course level</div>
                </div>
                <div className="flex-none">Beginner</div>
              </li>

              <li className="flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                <div className="flex-1 space-x-3 flex">
                  <Image src={WebSvg} alt="Language" />
                  <div className="text-black font-semibold">Language</div>
                </div>
                <div className="flex-none">{course.language}</div>
              </li>
            </ul>
            <ul className="flex space-x-4 items-center pt-3">
              <li className="text-black font-semibold">Share On:</li>
              <li>
                <Link
                  href={`https://www.facebook.com/sharer.php?u=https://www.artofcse.com/learning/video/${course.slug}`}
                  className="flex h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="4" fill="#1976D2" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.9191 27.7984C17.9191 27.9097 18.0094 28 18.1206 28H20.9934C21.1047 28 21.1947 27.9097 21.1947 27.7984V19.9369H23.2775C23.3819 19.9369 23.4691 19.8566 23.4781 19.7525L23.6784 17.3837C23.6881 17.2663 23.5956 17.1653 23.4775 17.1653H21.1947V15.485C21.1947 15.0909 21.5141 14.7716 21.9078 14.7716H23.5128C23.6244 14.7716 23.7144 14.6812 23.7144 14.57V12.2016C23.7144 12.0903 23.6244 12 23.5128 12H20.8009C19.2094 12 17.9191 13.29 17.9191 14.8816V17.1653H16.4828C16.3716 17.1653 16.2812 17.2556 16.2812 17.3669V19.7353C16.2812 19.8469 16.3716 19.9369 16.4828 19.9369H17.9191V27.7984Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://twitter.com/share?url=https://www.artofcse.com/learning/video/${course.slug}`}
                  className="flex h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="4" fill="#03A9F4" />
                    <path
                      d="M17.2096 26.007C22.8703 26.007 25.9658 21.3173 25.9658 17.2508C25.9658 17.1176 25.9631 16.9849 25.9571 16.853C26.558 16.4186 27.0802 15.8764 27.4923 15.2593C26.9409 15.5045 26.3473 15.6694 25.7249 15.744C26.3603 15.3628 26.8481 14.7601 27.0782 14.0417C26.4836 14.3942 25.825 14.6503 25.124 14.7887C24.5624 14.1905 23.7628 13.8164 22.8775 13.8164C21.1781 13.8164 19.7998 15.1946 19.7998 16.8935C19.7998 17.1351 19.8269 17.3699 19.8796 17.5952C17.3219 17.4665 15.0537 16.242 13.536 14.3798C13.2718 14.8345 13.1194 15.3629 13.1194 15.9267C13.1194 16.9943 13.6627 17.937 14.4888 18.4883C13.9839 18.4728 13.5097 18.3342 13.095 18.1035C13.0946 18.1164 13.0946 18.129 13.0946 18.1427C13.0946 19.6332 14.1554 20.8776 15.5637 21.1596C15.305 21.23 15.0329 21.2679 14.7522 21.2679C14.5542 21.2679 14.3612 21.2484 14.1737 21.2124C14.5655 22.4352 15.7017 23.3249 17.0487 23.3499C15.9953 24.1755 14.6684 24.6673 13.2263 24.6673C12.9783 24.6673 12.7331 24.653 12.4922 24.6246C13.8542 25.4976 15.4715 26.0071 17.2097 26.0071"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://pinterest.com/pin/create/bookmarklet/?media://www.artofcse.com/learning/video/${course.slug}`}
                  className="flex h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="4" fill="#C83D2A" />
                    <path
                      d="M20.2173 12C15.8321 12 13.5 14.8101 13.5 17.8743C13.5 19.2953 14.294 21.0674 15.5651 21.6294C15.7581 21.7164 15.8631 21.6794 15.9061 21.5004C15.9441 21.3644 16.1111 20.7094 16.1921 20.4004C16.2171 20.3014 16.2041 20.2154 16.1241 20.1224C15.7021 19.6343 15.3671 18.7453 15.3671 17.9113C15.3671 15.7742 17.0662 13.6991 19.9573 13.6991C22.4574 13.6991 24.2065 15.3231 24.2065 17.6463C24.2065 20.2714 22.8174 22.0875 21.0123 22.0875C20.0133 22.0875 19.2693 21.3034 19.5053 20.3334C19.7903 19.1783 20.3493 17.9363 20.3493 17.1032C20.3493 16.3562 19.9273 15.7382 19.0652 15.7382C18.0482 15.7382 17.2232 16.7452 17.2232 18.0973C17.2232 18.9563 17.5272 19.5363 17.5272 19.5363C17.5272 19.5363 16.5211 23.6005 16.3341 24.3596C16.0181 25.6446 16.3771 27.7257 16.4081 27.9047C16.4271 28.0037 16.5381 28.0347 16.6001 27.9537C16.6991 27.8237 17.9152 26.0886 18.2562 24.8346C18.3802 24.3776 18.8892 22.5245 18.8892 22.5245C19.2243 23.1295 20.1913 23.6365 21.2213 23.6365C24.2855 23.6365 26.4996 20.9434 26.4996 17.6013C26.4886 14.3971 23.7465 12 20.2173 12Z"
                      fill="white"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={`https://www.instagram.com/sharer.php?u://www.artofcse.com/learning/video/${course.slug}`}
                  className="flex h-10 w-10"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="40" height="40" rx="4" fill="url(#paint0_linear_198_1840)" />
                    <g clipPath="url(#clip0_198_1840)">
                      <path
                        d="M27.9875 16.704C27.95 15.8539 27.8125 15.2694 27.6156 14.763C27.4124 14.2254 27.0998 13.7441 26.6903 13.344C26.2902 12.9377 25.8058 12.6219 25.2744 12.422C24.765 12.225 24.1836 12.0875 23.3335 12.0501C22.477 12.0094 22.2051 12 20.0328 12C17.8605 12 17.5886 12.0094 16.7353 12.0469C15.8851 12.0844 15.3007 12.222 14.7944 12.4188C14.2567 12.6219 13.7754 12.9345 13.3753 13.344C12.9689 13.7441 12.6533 14.2286 12.4532 14.7599C12.2563 15.2694 12.1188 15.8507 12.0813 16.7009C12.0407 17.5574 12.0312 17.8293 12.0312 20.0016C12.0312 22.1739 12.0407 22.4458 12.0781 23.2991C12.1156 24.1492 12.2532 24.7337 12.4502 25.2401C12.6533 25.7777 12.9689 26.259 13.3753 26.6591C13.7754 27.0654 14.2598 27.3812 14.7912 27.5812C15.3007 27.7781 15.882 27.9156 16.7322 27.9531C17.5854 27.9907 17.8575 28 20.0298 28C22.202 28 22.474 27.9907 23.3273 27.9531C24.1774 27.9156 24.7619 27.7781 25.2682 27.5812C26.3435 27.1654 27.1936 26.3153 27.6093 25.2401C27.8062 24.7306 27.9438 24.1492 27.9812 23.2991C28.0187 22.4458 28.0281 22.1739 28.0281 20.0016C28.0281 17.8293 28.025 17.5574 27.9875 16.704ZM26.5466 23.2366C26.5122 24.018 26.381 24.4399 26.2716 24.7212C26.0027 25.4183 25.4495 25.9715 24.7525 26.2403C24.4712 26.3497 24.0462 26.481 23.2678 26.5153C22.4239 26.5529 22.1708 26.5622 20.036 26.5622C17.9012 26.5622 17.6449 26.5529 16.804 26.5153C16.0226 26.481 15.6007 26.3497 15.3194 26.2403C14.9725 26.1121 14.6568 25.909 14.4005 25.6433C14.1348 25.3838 13.9316 25.0713 13.8034 24.7244C13.694 24.4431 13.5628 24.018 13.5285 23.2397C13.4909 22.3958 13.4816 22.1426 13.4816 20.0078C13.4816 17.873 13.4909 17.6167 13.5285 16.776C13.5628 15.9946 13.694 15.5726 13.8034 15.2913C13.9316 14.9443 14.1348 14.6287 14.4037 14.3723C14.663 14.1066 14.9755 13.9034 15.3225 13.7754C15.6038 13.666 16.029 13.5347 16.8072 13.5003C17.6511 13.4628 17.9043 13.4534 20.039 13.4534C22.177 13.4534 22.4301 13.4628 23.271 13.5003C24.0524 13.5347 24.4743 13.666 24.7556 13.7754C25.1025 13.9034 25.4182 14.1066 25.6745 14.3723C25.9402 14.6317 26.1434 14.9443 26.2716 15.2913C26.381 15.5726 26.5122 15.9976 26.5466 16.776C26.5841 17.6199 26.5935 17.873 26.5935 20.0078C26.5935 22.1426 26.5841 22.3927 26.5466 23.2366Z"
                        fill="white"
                      />
                      <path
                        d="M20.0321 15.8916C17.7629 15.8916 15.9219 17.7325 15.9219 20.0018C15.9219 22.271 17.7629 24.112 20.0321 24.112C22.3013 24.112 24.1422 22.271 24.1422 20.0018C24.1422 17.7325 22.3013 15.8916 20.0321 15.8916ZM20.0321 22.6679C18.56 22.6679 17.3659 21.474 17.3659 20.0018C17.3659 18.5296 18.56 17.3356 20.0321 17.3356C21.5043 17.3356 22.6982 18.5296 22.6982 20.0018C22.6982 21.474 21.5043 22.6679 20.0321 22.6679Z"
                        fill="white"
                      />
                      <path
                        d="M25.263 15.7291C25.263 16.259 24.8333 16.6886 24.3033 16.6886C23.7734 16.6886 23.3438 16.259 23.3438 15.7291C23.3438 15.1991 23.7734 14.7695 24.3033 14.7695C24.8333 14.7695 25.263 15.1991 25.263 15.7291Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_198_1840"
                        x1="5.85929"
                        y1="34.1445"
                        x2="34.1407"
                        y2="5.85929"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FFC107" />
                        <stop offset="0.507" stopColor="#F44336" />
                        <stop offset="0.99" stopColor="#9C27B0" />
                      </linearGradient>
                      <clipPath id="clip0_198_1840">
                        <rect width="16" height="16" fill="white" transform="translate(12 12)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* <div className="wdiget">
            <h4 className="widget-title">Related Courses</h4>
            <ul className="list">
              <li className="flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                <div className="flex-none">
                  <div className="h-20 w-20 rounded">
                    <Image
                      src={reviewImg}
                      className="w-full h-full object-cover rounded"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex space-x-3 mb-2">
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                  </div>
                  <div className="mb-1 font-semibold text-black">Greatest Passion In...</div>
                  <span className="text-secondary font-semibold">$38.00</span>
                </div>
              </li>
              <li className="flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                <div className="flex-none">
                  <div className="h-20 w-20 rounded">
                    <Image
                      src={reviewImg2}
                      className="w-full h-full object-cover rounded"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex space-x-3 mb-2">
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                  </div>
                  <div className="mb-1 font-semibold text-black">Greatest Passion In...</div>
                  <span className="text-secondary font-semibold">$38.00</span>
                </div>
              </li>
              <li className="flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                <div className="flex-none">
                  <div className="h-20 w-20 rounded">
                    <Image
                      src={reviewImg3}
                      className="w-full h-full object-cover rounded"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex space-x-3 mb-2">
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                    <iconify-icon
                      icon="heroicons:star-20-solid"
                      className="text-tertiary"
                    ></iconify-icon>
                  </div>
                  <div className="mb-1 font-semibold text-black">Greatest Passion In...</div>
                  <span className="text-secondary font-semibold">$38.00</span>
                </div>
              </li>
            </ul>
          </div> */}
        </div>
      </>
    </div>
  );
};

export default CourseDetails;
