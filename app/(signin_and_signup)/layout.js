import Navbar from "@/components/Navbar";
function LayoutLoginReg({ children }) {
  return (
    <div>
      <>
        <Navbar />
        {children}
      </>
    </div>
  );
}

export default LayoutLoginReg;
