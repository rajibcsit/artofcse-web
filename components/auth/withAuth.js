import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      // checks whether we are on client / browser or server.
      if (typeof window !== "undefined") {
        const accessToken = localStorage.getItem("token");

        // If there is no access token we redirect to "/login" page.
        if (!accessToken) {
          router.replace("/login");
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures that this effect runs once after the initial render

    // Render the component that was passed with all its props
    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
