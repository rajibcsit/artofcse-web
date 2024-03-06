import Image from "next/image";
import okSvg from "@/public/images/svg/ok.svg";
import laptopSvg from "@/public/images/svg/laptop.svg";
import pencilSvg from "@/public/images/svg/pencil.svg";
import wifiSvg from "@/public/images/svg/wifi.svg";
const Overview = ({ course }) => {
  return (
    <div>
      <>
        <div id="tab1" className="tab-content">
          <div>
            <h3 className="text-2xl">Description</h3>
            <p className="mt-4" dangerouslySetInnerHTML={{ __html: course.description }}></p>
            {/* <div className="bg-[#F8F8F8] space-y-6 p-8 rounded-md my-8">
              <h4 className="text-2xl">What You will Learn?</h4>
              <ul className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                <li className="flex space-x-3">
                  <div className="flex-none relative top-1">
                    <Image src={okSvg} alt="svg" />
                  </div>
                  <div className="flex-1">
                    Learn how perspective works and how to incorporate your art
                  </div>
                </li>

                <li className="flex space-x-3">
                  <div className="flex-none relative top-1">
                    <Image src={okSvg} alt="svg" />
                  </div>
                  <div className="flex-1">
                    Learn how perspective works and how to incorporate your art
                  </div>
                </li>

                <li className="flex space-x-3">
                  <div className="flex-none relative top-1">
                    <Image src={okSvg} alt="svg" />
                  </div>
                  <div className="flex-1">
                    Learn how perspective works and how to incorporate your art
                  </div>
                </li>

                <li className="flex space-x-3">
                  <div className="flex-none relative top-1">
                    <Image src={okSvg} alt="svg" />
                  </div>
                  <div className="flex-1">
                    Learn how perspective works and how to incorporate your art
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl">What You will Learn?</h4>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-5">
                <div className="bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center">
                  <span className="flex-none">
                    <Image src={laptopSvg} alt="laptop-svg" />
                  </span>
                  <span className="flex-1 text-black">Computer/Mobile</span>
                </div>
                <div className="bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center">
                  <span className="flex-none">
                    <Image src={pencilSvg} alt="Pencil-svg" />
                  </span>
                  <span className="flex-1 text-black">Paper & Pencil</span>
                </div>
                <div className="bg-white rounded px-5 py-[18px] flex shadow-box2 space-x-[10px] items-center">
                  <span className="flex-none">
                    <Image src={wifiSvg} alt="Wifi-svg" />
                  </span>
                  <span className="flex-1 text-black">Internet Connect</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    </div>
  );
};
export default Overview;
