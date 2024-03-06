import Image from "next/image";
import TestimonialImg from "/public/images/all-img/testi-left.png";
function Testimonial() {
  return (
    <div>
      <>
        <div className="section-padding bg-[url('../public/images/all-img/section-bg-16.png')] bg-cover bg-no-repeat lg:mt-[136px]">
          <div className="container lg:-mt-[250px] xl:pb-[136px] lg:pb-20 pb-10">
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] bg-white shadow-box14 rounded-md divide-x-2 divide-[#E4EEED] py-20">
              <div className="text-center">
                <h2 className="text-secondary font-bold">
                  <span className="counter">82</span>K+
                </h2>
                <span className="block text-black font-semibold">Enrolled Students</span>
              </div>
              {/*----------------single counter--------*/}
              <div className="text-center">
                <h2 className="text-secondary font-bold">
                  <span className="counter">348</span>+
                </h2>
                <span className="block text-black font-semibold">Academic Programs</span>
              </div>
              {/*----------------single counter--------*/}
              <div className="text-center">
                <h2 className="text-secondary font-bold">
                  <span className="counter">125</span>+
                </h2>
                <span className="block text-black font-semibold">Winning Award</span>
              </div>
              {/*----------------single counter--------*/}
              <div className="text-center">
                <h2 className="text-secondary font-bold">
                  <span className="counter">37</span>+
                </h2>
                <span className="block text-black font-semibold">Certified Students</span>
              </div>
              {/*----------------single counter--------*/}
            </div>
          </div>
          <div className="container">
            <div className="grid grid-cols-12 lg:gap-10 gap-6">
              <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                <Image src={TestimonialImg} alt="image" draggable="false" />
              </div>
              <div className="xl:col-span-5 lg:col-span-6 col-span-12 flex flex-col justify-center">
                <div className="mini-title">Testimonial</div>
                <h4 className="column-title">
                  What Says Our
                  <span className="shape-bg"> Students</span>
                  About Us
                </h4>
                <div>
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered. There are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by injected humour.
                </div>
                <div className="mt-12">
                  <a href="#" className="btn btn-primary">
                    View All Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Testimonial;
