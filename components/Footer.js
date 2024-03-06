import Image from "next/image";
import mailSvg from "@/public/images/svg/mail.svg";
import websiteLogo from "@/public/images/logo/artofcse-green.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className="main-footer">
      <footer className="footer_area bg-black">
        <div className="section-padding container">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            <div className="single-footer">
              <div className="lg:max-w-[270px]">
                <Link href="#" className="mb-10 block">
                  <Image src={websiteLogo} alt="logo" width={150} height={150} />
                </Link>
                <p className="text-gray-300">
                  ARTOFCSE is a programming based community which focuses on several aspects of
                  computer science and engineering such as programming, data structure and
                  algorithm, problem-solving etc.
                </p>
                <ul className="flex space-x-4 pt-8">
                  <li>
                    <Link
                      href="#"
                      className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white transition hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:facebook"></iconify-icon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white transition hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:twitter"></iconify-icon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white transition hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:linkedin"></iconify-icon>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white transition hover:bg-primary hover:text-white"
                    >
                      <iconify-icon icon="bxl:instagram"></iconify-icon>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="single-footer">
              <div className="flex space-x-[80px]">
                <div className="flex-1 lg:flex-none">
                  <h4 className="mb-8 text-2xl font-bold text-white">Links</h4>
                  <ul className="list-item space-y-5 footer-list">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="learning/video">Courses</Link>
                    </li>
                    <li>
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="#">About Us</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 lg:flex-none">
                  <h4 className="mb-8 text-2xl font-bold text-white">Legal</h4>
                  <ul className="list-item space-y-5 footer-list">
                    <li>
                      <Link href="#">Tearm & Condition</Link>
                    </li>
                    <li>
                      <Link href="#">Payment Method</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="single-footer">
              <h4 className="mb-8 text-2xl font-bold text-white">Newsletter</h4>
              <div className="mb-8 text-gray-300">
                Subscribe now to embark on a journey of continuous learning and stay connected with
                the ever-evolving world of computer science.
              </div>
              <div className="mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 shadow-e1">
                <div className="flex-none">
                  <span className=" ">
                    <Image src={mailSvg} alt="Mail" />
                  </span>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter your mail"
                    className="border-none focus:ring-0"
                  />
                </div>
              </div>
              <button className="btn btn-primary block w-full text-center">Subscribe Now</button>
            </div>
          </div>
        </div>
        <div className="container border-t border-white border-opacity-[0.1] py-8 text-center text-base text-gray-300">
          &copy; Copyright 2023 | Art Of CSE | All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;
