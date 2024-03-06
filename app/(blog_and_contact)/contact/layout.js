let title = "Get In Touch • Art of CSE";
let keywords =
  "Computer Science Learning, Programming Education, Online Coding Courses, Contact Art of CSE";
let description =
  "Connect with Art of CSE to enhance your computer science skills. Reach out for personalized guidance, inquire about our online coding courses, or simply share your feedback. We're here to support your journey in mastering the art of computer science.";

export const metadata = {
  title: title,
  keywords: keywords,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
  twitter: {
    title: title,
    description: description,
  },
};
export default function LayoutContact({ children }) {
    return (
      <>
       
        {children}
       
      </>
    );
  }