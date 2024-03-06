"use client";
import Image from "next/image";
import Link from "next/link";
import teamImgThumble from "/public/images/all-img/team1.png";

const Card = ({ type }) => {
  return (
    <>
      <div
        className={`bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4 border-t-4 border-transparent hover:border-secondary`}
      >
        <div className="w-[170px] h-[170px] rounded-full relative mx-auto mb-8">
          <Image
            src={teamImgThumble}
            alt="team image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="course-content">
          <h4 className="lg:text-2xl text-1xl mb-1 font-bold">Erics Widget</h4>
          <div>UI/UX Designer</div>
          <ul className="space-x-4 flex justify-center pt-6">
            <li>
              <Link
                href="#"
                className="h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition hover:bg-primary hover:text-white"
              >
                <iconify-icon icon="bxl:facebook"></iconify-icon>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition hover:bg-secondary hover:text-white"
              >
                <iconify-icon icon="bxl:twitter"></iconify-icon>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition hover:bg-[#8861DB] hover:text-white"
              >
                <iconify-icon icon="bxl:linkedin"></iconify-icon>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Card;
