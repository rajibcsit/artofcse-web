import Navbar from "@/components/Navbar";
function LayoutLearning({ children }) {
  return (
    <div>
      <>
        <Navbar />
        {children}
      </>
    </div>
  );
}

export default LayoutLearning;
