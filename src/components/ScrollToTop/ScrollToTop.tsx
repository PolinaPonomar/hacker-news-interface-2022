import React, { useEffect } from "react";
import { useLocation } from "react-router";

interface IScrollToTopProps {
  children: any
}

const ScrollToTop = (props: IScrollToTopProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {props.children}
    </>
  );
};

export default ScrollToTop;
