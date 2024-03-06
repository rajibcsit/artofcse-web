import Image from "next/image";
import bannerMan from "/public/images/banner/home-image.svg";

function Banner() {
  return (
    <div>
      <>
        <section className="xl:min-h-screen bg-[url('../public/images/banner/1.png')]  bg-cover bg-no-repeat bg-center overflow-hidden">
          <div className="container relative">
            <div className="max-w-[570px] xl:pt-[170px] md:pt-32 md:pb-20 pt-32 pb-14 xl:pb-20 space-y-8">
              <h1>
                Classical{" "}
                <span className="text-secondary inline-block  bg-no-repeat bg-bottom">
                  Education
                </span>{" "}
                For The Future
              </h1>
              <div className="plain-text text-gray leading-[30px]">
                Unlock the future with ARTOFCSE
              </div>

              <div className="flex-none">
                <button className="btn btn-primary w-full lg:w-auto">Get Started</button>
              </div>
            </div>
            <div className="imge-box absolute xl:right-[-50px] hidden xl:block bottom-[30px]">
              <Image src={bannerMan} alt="banner image" width={600} />
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default Banner;
