import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";
import PropTypes from 'prop-types';

export interface ScrollToTopProps {
  children: any
}

const ScrollToTop = (props: ScrollToTopProps) => {
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

ScrollToTop.displayName = 'ScrollToTop';
ScrollToTop.propTypes = {
  children: PropTypes.any,
};

export default ScrollToTop;
