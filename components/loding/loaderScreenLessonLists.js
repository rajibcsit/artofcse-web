export const LoadingScreenLessonLists = () => {
  return (
    <div className="loading-screen my-5">
      <div className="w-[100%]">
        <span className="skeleton" style={{ height: "150px", width: "100%" }}></span>
        <span className="skeleton" style={{ height: "80px", width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
      </div>
    </div>
  );
};
