export const LoaderScreenCourseLists = () => {
  return (
    <div className="loading-screen-courses-list my-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="w-[100%] wdiget bg-white shadow-box2 rounded-[8px]">
          <span className="skeleton" style={{ height: "250px", width: "100%" }}></span>
          <span className="skeleton" style={{ width: "100%" }}></span>
        </div>
        <div className="w-[100%] wdiget bg-white shadow-box2 rounded-[8px]">
          <span className="skeleton" style={{ height: "250px", width: "100%" }}></span>
          <span className="skeleton" style={{ width: "100%" }}></span>
        </div>
        <div className="w-[100%] wdiget bg-white shadow-box2 rounded-[8px]">
          <span className="skeleton" style={{ height: "250px", width: "100%" }}></span>
          <span className="skeleton" style={{ width: "100%" }}></span>
        </div>
      </div>
    </div>
  );
};
