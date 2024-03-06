export const LoadingScreenLesson = () => {
  return (
    <div className="loading-screen my-5">
      <div className="w-[100%]">
        <span className="skeleton" style={{ width: "100%" }}></span>
        <span className="skeleton" style={{ height: "350px", width: "100%" }}></span>
        <span className="skeleton" style={{ width: "100%" }}></span>
      </div>
    </div>
  );
};
