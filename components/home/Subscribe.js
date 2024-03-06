import Image from "next/image";
import mailSvg from "@/public/images/svg/mail-big.svg";
import mail from "@/public/images/svg/mail.svg";
function Subscribe() {
  return (
    <div>
      <>
        <div className="bg-[url('../public/images/all-img/section-bg-3.png')] bg-cover bg-no-repeat bg-center py-20">
          <div className="container">
            <div className="lg:flex lg:items-center lg:space-x-[70px]">
              <div className="flex-none">
                <div className="flex items-center space-x-8 text-white max-w-[327px] mx-auto lg:mb-0 md:mb-10 mb-5">
                  <div className="flex-none">
                    <Image src={mailSvg} alt="mail" />
                  </div>
                  <div className="flex-1 lg:text-[34px] lg:leading-[51px] md:text-3xl text-2xl font-bold">
                    Subscribe to My Newsletter
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="md:flex items-center relative md:space-x-6 md:space-y-0 space-y-4">
                  <div className="flex-1 relative">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2">
                      <Image src={mail} alt="mail" />
                    </span>
                    <input
                      type="text"
                      placeholder="Enter your mail address"
                      className="border-b border-t-0 border-l-0 border-r-0 border-[#B2E2DF] ring-0 focus:ring-0 bg-transparent text-white placeholder:text-[#B2E2DF] focus:outline-0 focus:border-[#B2E2DF] transition pl-8 text-lg"
                    />
                  </div>
                  <div className="flex-none">
                    <button className="btn bg-white text-secondary md:w-auto w-full">
                      Get Started Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Subscribe;
