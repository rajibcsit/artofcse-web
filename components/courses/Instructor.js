import Image from "next/image";
import fileSvg from "@/public/images/svg/file3.svg";
import userSvg from "@/public/images/svg/user2.svg";
import reviewSvg from "@/public/images/svg/star2.svg";
import likeSvg from "@/public/images/svg/like.svg";
import fbSvg from "@/public/images/social/fb.svg";
import InSvg from "@/public/images/social/ln.svg";
import youtubeSvg from "@/public/images/social/youtube.svg";
import instragramSvg from "@/public/images/social/instra.svg";
import twitterSvg from "@/public/images/social/twiiter.svg";
import Link from "next/link";
function Instructor({ instructor }) {
  return (
    <div>
      <>
        <div id="tab3" className="tab-content">
          <div className="bg-[#F8F8F8] rounded-md p-8">
            <div className="md:flex space-x-5 mb-8">
              <div className="h-[310px] w-[270px] flex-none rounded mb-5 md:mb-0">
                <Image
                  src={instructor.image}
                  height={300}
                  width={250}
                  className="w-full h-full object-cover rounded"
                  alt="image"
                />
              </div>
              <div className="flex-1">
                <div className="max-w-[300px]">
                  <h4 className="text-[34px] font-bold leading-[51px]">{instructor.name}</h4>
                  <div className="text-primary mb-6">{instructor.designation}</div>
                  <ul className="list space-y-4">
                    <li className="flex space-x-3">
                      <Image src={fileSvg} alt="Courses" />

                      <div>15+ Courses</div>
                    </li>
                    <li className="flex space-x-3">
                      <Image src={fileSvg} alt="Lessons" />

                      <div>500+ Lessons</div>
                    </li>

                    <li className="flex space-x-3">
                      <Image src={userSvg} alt="Student Learned" />

                      <div>9k+ Student Learned</div>
                    </li>

                    <li className="flex space-x-3">
                      <Image src={reviewSvg} alt="Reviews" />
                      <div>547+ Reviews</div>
                    </li>

                    {/* <li className="flex space-x-3">
                      <Image src={likeSvg} alt="Average Rating" />
                      <div>4.9 Average Rating</div>
                    </li> */}
                  </ul>
                  <ul className="flex space-x-3 mt-8">
                    <li className="">
                      <Link href="#">
                        <Image src={fbSvg} alt="fb link" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="#">
                        <Image src={InSvg} alt="In" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="#">
                        <Image src={youtubeSvg} alt="youtube" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="#">
                        <Image src={instragramSvg} alt="instragram" />
                      </Link>
                    </li>

                    <li className="">
                      <Link href="#">
                        <Image src={twitterSvg} alt="twitter" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>{instructor.description}</p>
          </div>
        </div>
      </>
    </div>
  );
}

export default Instructor;
