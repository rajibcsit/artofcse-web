export const LoaderScreenBlogLists = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[30px]">
      <div className="w-[100%] wdiget bg-white shadow-box2 rounded-[8px]">
        <span className="skeleton" style={{ height: "200px", width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
      </div>
      <div className="w-[100%] wdiget bg-white shadow-box2 rounded-[8px]">
        <span className="skeleton" style={{ height: "200px", width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
      </div>
    </div>
  );
};
