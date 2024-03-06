import okSvg from "@/public/images/svg/ok.svg";
import Image from "next/image";
import about2Img from "/public/images/all-img/about.svg";
function Platform() {
  return (
    <div>
      <>
        <div className="bg-[url('../public/images/all-img/section-bg-2.png')] bg-cover bg-no-repeat bg-center section-padding">
          <div className="container">
            <div className="lg:grid grid-cols-12 gap-[30px]">
              <div className="xl:col-span-5 lg:col-span-6 col-span-12">
                <div className="mini-title">Best Online Learning Platform</div>
                <h4 className="column-title">
                  One Platfrom & Many
                  <span className="shape-bg"> Courses</span>
                  For You
                </h4>
                <div>
                  Simplify your learning journey by accessing a variety of courses in one
                  centralized hub.
                </div>
                <ul className="space-y-2 pt-8">
                  <li className="flex flex-wrap">
                    <div className="flex-none mr-3">
                      <div className="">
                        <Image src={okSvg} alt="ok" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-1 font-semibold">9/10 Average Satisfaction Rate</h4>
                    </div>
                  </li>
                  <li className="flex flex-wrap">
                    <div className="flex-none mr-3">
                      <div className="">
                        <Image src={okSvg} alt="ok" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-1 font-semibold">96% Completitation Rate</h4>
                    </div>
                  </li>
                  <li className="flex flex-wrap">
                    <div className="flex-none mr-3">
                      <div className="">
                        <Image src={okSvg} alt="ok" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg mb-1 font-semibold">
                        Friendly Environment & Expert Teacher
                      </h4>
                    </div>
                  </li>
                </ul>
                <div className="pt-8">
                  <a href="#" className="btn btn-primary">
                    Explore Our Courses
                  </a>
                </div>
              </div>
              <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6">
                <Image src={about2Img} alt="about-2 image" className="mx-auto block w-full" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Platform;
