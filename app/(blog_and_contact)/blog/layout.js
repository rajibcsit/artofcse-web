import Link from "next/link";
import SidebarWrapper from "@/components/blog/SidebarWrapper";

function LayoutBlog({ children }) {
  return (
    <div>
      <>
        {/*........... Blog Banner section --------------*/}
        <div className="breadcrumbs section-padding bg-[url('../public/images/all-img/bred.png')] bg-cover bg-center bg-no-repeat">
          <div className="container text-center header-section">
            <h2>Exploring the World of Technology</h2>
            <nav>
              <ol className="flex items-center justify-center space-x-3">
                <li className="breadcrumb-item">
                  <Link href="#">Pages </Link>
                </li>
                <li className="breadcrumb-item">-</li>
                <li className="text-primary">Blog </li>
              </ol>
            </nav>
          </div>
        </div>

        {/*........... Blog Courses section --------------*/}
        <div className="nav-tab-wrapper tabs pt-10 pb-10">
          <div className="container">
            <div className="grid grid-cols-12 gap-[30px] content-margin">
              <div className="lg:col-span-8 col-span-12">{children}</div>
              {/*----------- Categories start  --------*/}
              <div className="lg:col-span-4 col-span-12">
                <SidebarWrapper />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default LayoutBlog;
