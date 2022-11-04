import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      // behavior: "instant", // Optional if you want to skip the scrolling animation
    });
  }, [pathname]);

  return (
    <>

      <Outlet />

      <Footer />
    </>
  )
}