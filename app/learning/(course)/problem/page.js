import ProblemSolvingCard from "@/components/cards/ProblemSolvingCard.js";
// import { LoadingScreenCodeLists } from "@/components/loding/LoadingScreenCodeLists";
import CourseAPI from "@/data/courses";

let title = "Art of CSE | Problem Solving | Master Coding Challenges with Expert Solutions";
let keywords =
  "CSE Problem Solving, Coding Challenges, Algorithmic Solutions, Programming Practice, Problem-Solving Courses";
let description =
  "Enhance your problem-solving skills with Art of CSE's dedicated page. Dive into challenging coding problems and access expert solutions to sharpen your algorithmic thinking. Explore our curated courses designed to empower you with the problem-solving prowess needed in the dynamic field of computer science. Elevate your programming abilities through hands-on practice and in-depth guidance";

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

export default async function ProblemSolvingPage() {
  //get from API
  const courses = await CourseAPI.getCourses("problem");

  return (
    <div>
      <>
        <div className="breadcrumbs section-padding bg-[url('../public/images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
          <div className="container text-center">
            <h2>Solutions of several problem solving questions</h2>
            <p className="breadcrumb-item">
              Find solutions get the idea and take your problem solving skills to the next level.
            </p>
          </div>
        </div>

        {/* Start Codeing for main content */}

        <div className="container pt-10 mb-14">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
            {/* Start Codeing for  card */}
            {courses.map((problem) => {
              return <ProblemSolvingCard key={problem.id} problem={problem} />;
            })}
          </div>
        </div>
      </>
    </div>
  );
}
