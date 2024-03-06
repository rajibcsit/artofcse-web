import Link from "next/link";
function Carriculum({ totalLesson, sections }) {
  return (
    <div>
      <>
        <div id="tab2" className="tab-content">
          <div>
            <h3 className="text-2xl"> Description</h3>
            <div className="md:flex md:space-x-10 space-x-3 flex-wrap mt-4 mb-6">
              <span>Level: Beginner</span>
              <span>{totalLesson} Lectures</span>
              {/* <span>Total: 5 Hours 56 Minutes 24 Seconds</span> */}
            </div>
            {/*------------- section Carriculum list-----------*/}
            <div className="accrodain py-5">
              {sections.map((section) => {
                return (
                  <details key={section.id} className="group pt-1" open={true}>
                    <summary className="flex justify-between items-center cursor-pointer list-none carriculum-title">
                      <div className=""> {section.title}</div>
                      <span className="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shapeRendering="geometricPrecision"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>

                    {section.lessons.map((lesson) => {
                      return (
                        <div key={lesson.id} className="group-open:animate-fadeIn">
                          <Link
                            href={`/learning/${lesson.slug}`}
                            className="flex items-center py-3  border-b border-[#ECECEC]"
                          >
                            <div className="flex-1 flex">
                              <span className="flex-none mr-2">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z"
                                    stroke="#7B7B8A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M19.5222 17.1001L16.7422 15.1501V8.84013L19.5222 6.89013C20.8822 5.94013 22.0022 6.52013 22.0022 8.19013V15.8101C22.0022 17.4801 20.8822 18.0601 19.5222 17.1001Z"
                                    stroke="#7B7B8A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
                                    stroke="#7B7B8A"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              <span className="flex-1">{lesson.title}</span>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Carriculum;
