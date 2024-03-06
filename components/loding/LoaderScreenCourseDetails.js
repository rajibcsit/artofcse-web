export const LoaderScreenCourseDetails = () => {
  return (
    <div className="loading-screen-courses-list my-5">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="lg:col-span-8 wdiget bg-white shadow-box2 rounded-[8px]">
          <span className="skeleton" style={{ height: "280px", width: "100%" }}></span>
          <span className="skeleton" style={{ width: "100%" }}></span>
        </div>
        <div className="lg:col-span-4 wdiget bg-white shadow-box2 rounded-[8px]">
          <span className="skeleton" style={{ height: "280px", width: "100%" }}></span>
          <span className="skeleton" style={{ width: "100%" }}></span>
        </div>
      </div>
    </div>
  );
};
