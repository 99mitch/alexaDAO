import Footer from "components/footer";
import Navbar from "components/navbar";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const isLandingPage = router.pathname === "/";
  const isHome = router.pathname === "/home";

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
