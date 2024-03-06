import Image from "next/image";
import lightSvg from "@/public/images/svg/light-big.svg";
import targetSvg from "@/public/images/svg/target-big.svg";
import aboutImage from "/public/images/all-img/about1.png";
function About() {
  return (
    <div>
      <>
        <div className="about-area section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div>
                <Image src={aboutImage} alt="about-image" className="mx-auto" />
              </div>
              <div>
                <div className="mini-title">About ARTOFCSE</div>
                <h4 className="column-title">
                  Unlocking Knowledge Through ARTOFCSE
                  <span className="shape-bg"> E-Learning.</span>
                </h4>
                <div>
                  Empowering Tomorrow's Tech Leaders Today. Unlock Your Potential with ARTOFCSE's
                  Cutting-Edge eLearning.
                </div>
                <ul className="list-item space-y-6 pt-8">
                  <li className="flex">
                    <div className="flex-none mr-6">
                      <div className="h-[72px] w-[72px] rounded-full">
                        <Image src={lightSvg} alt="mission" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-1">Our Mission</h4>
                      <div>
                        Our mission is to empower learners worldwide by providing high-quality,
                        accessible education in computer science and engineering, fostering a global
                        community of knowledge seekers.
                      </div>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-none mr-6">
                      <div className="h-[72px] w-[72px] rounded-full">
                        <Image src={targetSvg} alt="Vission" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl mb-1">Our Vision</h4>
                      <div>
                        Our vision at ARTOFCSE E-Learning is to be the premier destination for
                        cutting-edge, innovative online education in computer science and
                        engineering, shaping the future of technology through inspired learning.
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="pt-8">
                  <a href="#" className="btn btn-primary">
                    Read More Us
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

export default About;
