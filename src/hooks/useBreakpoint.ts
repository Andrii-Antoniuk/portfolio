"use client";
import "client-only";
import { useEffect, useLayoutEffect, useState } from "react";
import { debounce } from "ts-debounce";
import { DEFAULT_BREAKPOINTS } from "~/utils/breakpoints";

type WindowDimensions = {
    width?: number;
    height?: number;
};

function getCurrentBreakpoint(width?: number) {
    let currBreakpoint = 0;

    if (!width) {
        return -1;
    }

    Object.values(DEFAULT_BREAKPOINTS).forEach((value) => {
        if (width >= value) {
            currBreakpoint = value;
        }
    });

    return currBreakpoint;
}

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return {
        width,
        height,
    };
}

/**
 *  Looks like handling those will be really hard for SSR components
 *  Because of that, those I'd use in client-only components, e.g admin panel
 *  Other stuff will just use CSS media queries
 */
export const useWindowDimensions = (): WindowDimensions => {
    const [dimensions, setDimensions] = useState<WindowDimensions>({
        width: undefined,
        height: undefined,
    });

    const handleResize = debounce(() => {
        // vvv Have to declare this function inside the hook to avoid problems with SSR (window is undefined on the server)
        function handleWindowResize() {
            setDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, 300);

    useLayoutEffect(() => {
        void handleResize();
    }, [handleResize]);

    useEffect(() => {
        setDimensions(getWindowDimensions());
    }, []);

    return dimensions;
};

export const useBreakpoints = () => {
    const { width } = useWindowDimensions();
    const [breakpoint, setBreakpoint] = useState<number>(
        getCurrentBreakpoint(width)
    );

    useLayoutEffect(() => {
        const currBreakpoint = getCurrentBreakpoint(width);

        setBreakpoint(currBreakpoint);
    }, [width]);

    return breakpoint;
};
