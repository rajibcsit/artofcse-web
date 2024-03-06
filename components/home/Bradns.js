import Link from "next/link";
import Image from "next/image";
import Brand1 from "@/public/images/svg/ursera.svg";
import Brand2 from "@/public/images/svg/hubspot.svg";
import Brand3 from "@/public/images/svg/udamy.svg";
import Brand4 from "@/public/images/svg/trustPilot.svg";
import Brand5 from "@/public/images/svg/britiscouncile.svg";
function Bradns() {
  return (
    <div>
      <>
        <div className="brands-area section-padding-bottom">
          <div className="container">
            <div className="text-center text-black text-2xl font-medium mb-[50px]">
              Trusted By 1k+ Company Arround The World!
            </div>

            <ul className="flex flex-wrap items-center lg:justify-between justify-center">
              <li className="mb-6 last:mb-0 mr-6 last:mr-0 transition duration-150 grayscale-[80] hover:grayscale-0">
                <Link href="#" className="block">
                  <Image src={Brand1} alt="brand company" />
                </Link>
              </li>

              <li className="mb-6 last:mb-0 mr-6 last:mr-0 transition duration-150 grayscale-[80] hover:grayscale-0">
                <Link href="#" className="block">
                  <Image src={Brand2} alt="brand company" />
                </Link>
              </li>

              <li className="mb-6 last:mb-0 mr-6 last:mr-0 transition duration-150 grayscale-[80] hover:grayscale-0">
                <Link href="#" className="block">
                  <Image src={Brand3} alt="brand company" />
                </Link>
              </li>

              <li className="mb-6 last:mb-0 mr-6 last:mr-0 transition duration-150 grayscale-[80] hover:grayscale-0">
                <Link href="#" className="block">
                  <Image src={Brand4} alt="brand company" />
                </Link>
              </li>

              <li className="mb-6 last:mb-0 mr-6 last:mr-0 transition duration-150 grayscale-[80] hover:grayscale-0">
                <Link href="#" className="block">
                  <Image src={Brand5} alt="brand company" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
}

export default Bradns;
