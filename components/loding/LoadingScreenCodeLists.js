export const LoadingScreenCodeLists = () => {
  return (
    <div className="loading-screen-courses-list my-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="grid grid-cols-12 gap-[30px] shadow-md border border-slate-100 rounded-xl p-2">
          <div className="col-span-4 ">
            <span className="skeleton" style={{ height: "110px", width: "100%" }}></span>
          </div>
          <div className="col-span-8">
            <span className="skeleton" style={{ width: "100%" }}></span>
            <span className="skeleton" style={{ width: "100%" }}></span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[30px] shadow-md border border-slate-100 rounded-xl p-2">
          <div className="col-span-4 ">
            <span className="skeleton" style={{ height: "110px", width: "100%" }}></span>
          </div>
          <div className="col-span-8">
            <span className="skeleton" style={{ width: "100%" }}></span>
            <span className="skeleton" style={{ width: "100%" }}></span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[30px] shadow-md border border-slate-100 rounded-xl p-2">
          <div className="col-span-4 ">
            <span className="skeleton" style={{ height: "110px", width: "100%" }}></span>
          </div>
          <div className="col-span-8">
            <span className="skeleton" style={{ width: "100%" }}></span>
            <span className="skeleton" style={{ width: "100%" }}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
