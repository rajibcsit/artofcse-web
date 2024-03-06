"use client";
import Image from "next/image";
import Link from "next/link";

const Card = ({ code }) => {
  return (
    <>
      <div className=" flex lg:flex shadow-md border border-slate-100 rounded-xl p-2 md:p-0 g">
        <Image
          src={code.image}
          alt="coding-card"
          width={500}
          height={500}
          className="mx-auto responsive-img"
        />

        <div className="p-2">
          <h5 className="text-sm mb-2 font-bold">
            <Link href={`/learning/code/${code.slug}`}>{code.title}</Link>
          </h5>

          <p className="text-xs">{code.short_description}</p>
        </div>
      </div>
    </>
  );
};
export default Card;
