import { useEffect, useState } from "react";

const useBreakpoints = (
  ...givenBreakpoints: Array<{ breakpointName: string; breakpointVal: number }>
) => {
  const detectBreakpoints = (
    ...breakpoints: Array<{ breakpointName: string; breakpointVal: number }>
  ): { [key: string]: boolean } => {
    // If no breakpoints provided - return with zero elements
    if (breakpoints.length === 0) {
      return {};
    }

    
    let allQueries: { [key: string]: MediaQueryList } = {};
    for (let breakpoint of breakpoints) {
      allQueries = {
        ...allQueries,
        [breakpoint.breakpointName]: window.matchMedia(
          `(min-width: ${breakpoint.breakpointVal}px)`
        ),
      };
    }

    // if query matches -> add it to object containing matching queries
    let matchingQueries: { [key: string]: boolean } = {};
    for (let key in allQueries) {
      if (allQueries[key].matches) {
        matchingQueries = {
          ...matchingQueries,
          [key]: true,
        }; // add it to the object as "keyName: boolean"
      } else {
        matchingQueries = {
            ...matchingQueries,
            [key]: false,
          };
      }
    }

    return matchingQueries;
  };

  const [matchingBreakpoints, setMatchingBreakpoints] = useState<
    { [key: string]: boolean }
  >({});
  useEffect(() => {
    // Check breakpoints at component load
    setMatchingBreakpoints(detectBreakpoints(...givenBreakpoints));

    // Check breakpoints on every resize
    window.addEventListener("resize", () => {
      setMatchingBreakpoints(detectBreakpoints(...givenBreakpoints));
    });

    // Remove unnecessary listeners
    return window.removeEventListener("resize", () => {
      setMatchingBreakpoints(detectBreakpoints(...givenBreakpoints));
    });
  }, []);

  return matchingBreakpoints;
};

export default useBreakpoints;
