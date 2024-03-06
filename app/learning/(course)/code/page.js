import CodeCard from "@/components/cards/CodeCard.js";
// import { LoadingScreenCodeLists } from "@/components/loding/LoadingScreenCodeLists";
import CourseAPI from "@/data/courses";

let title = "Art of CSE | Coding Solutions | Unlock the Power of Code with Expert Solutions";
let keywords =
  "CSE Coding Solutions, Get Code, Programming Solutions, Code Samples, Algorithmic Implementations";
let description =
  "Explore the world of code on Art of CSE's Coding page. Find expert solutions to coding challenges and access ready-to-use code snippets. Whether you're a beginner or an experienced coder, our curated collection offers valuable insights and practical implementations. Elevate your programming skills by delving into the art of coding with Art of CSE";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
    // images: ["../images/banner/1.png"],
  },
  twitter: {
    title: title,
    description: description,
  },
};

export default async function CodingPage() {
  //get from API
  const courses = await CourseAPI.getCourses("code");

  return (
    <div>
      <>
        <div className="breadcrumbs section-padding bg-[url('../public/images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
          <div className="container text-center">
            <h2>Coding Examples</h2>
            <p className="breadcrumb-item">
              Learn coding quickly. Take help when are in a problem.
            </p>
          </div>
        </div>

        {/* Start Codeing for main content */}

        <div className="container pt-10 mb-14">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {/* Start Codeing for  card */}

            {courses.map((code) => {
              return <CodeCard key={code.id} code={code} />;
            })}
          </div>
        </div>
      </>
    </div>
  );
}
