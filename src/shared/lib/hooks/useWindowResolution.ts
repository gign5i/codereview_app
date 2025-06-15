"use client";

import { useEffect, useState } from "react";

const MOBILE_MAX_WIDTH = 767;
const TABLET_MAX_WIDTH = 1199;

const useWindowResolution = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkResolution = () => {
      const width = window.innerWidth;
      setIsMobile(width <= MOBILE_MAX_WIDTH);
      setIsTablet(width > MOBILE_MAX_WIDTH && width <= TABLET_MAX_WIDTH);
    };
    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => window.removeEventListener("resize", checkResolution);
  }, []);

  return { isMobile, isTablet };
};

export default useWindowResolution;
