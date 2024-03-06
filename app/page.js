import Footer from "@/components/Footer";
import Banner from "@/components/home/Banner";
import Courses from "@/components/home/Courses";
import Platform from "@/components/home/Platform";
import Topics from "@/components/home/Topics";
import Navbar from "@/components/Navbar";

let title = "Art of CSE • Web Design • Web Development • Programming Bangla Tutorials";
let keywords =
  "Web Design, Web Development, Programming, Bangla tutorial, ওয়েব ডিজাইন , ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং, বাংলা  টিউটোরিয়াল";
let description =
  "Learn Web Design, Web Development, Programming. ঘরে বসে ওয়েব ডিজাইন , ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং শিখুন আর্ট অফ সিএসইতে";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
    images: ["../images/banner/1.png"],
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        {/*........... Banner section --------------*/}
        <Banner />

        {/*------------------ about section start----------*/}
        {/* <About /> */}

        {/*------------------ bradns section start----------*/}
        {/* <Bradns /> */}

        {/*------------------Feture section start----------*/}
        {/* <Features /> */}

        {/*------------------course section start----------*/}
        <Courses />

        {/*------------------platform start----------*/}
        <Platform />

        {/*------------------cta start----------*/}
        {/* <Subscribe /> */}

        {/*------------------topics start----------*/}
        <Topics />

        {/*----------------testtimonal start--------*/}
        {/* <Testimonial /> */}

        {/*----------- team start-------------------- */}
        {/* <TeamMember /> */}

        {/*--------------- Team Blog Section --------*/}
        {/* <Blogs /> */}

        {/*---------------  Section for footer --------*/}
        <Footer />
      </div>
    </>
  );
}
