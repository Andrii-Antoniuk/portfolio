"use client";
import "client-only";
import { useLayoutEffect, useState } from "react";
import { debounce } from "ts-debounce";
import { DEFAULT_BREAKPOINTS } from "~/utils/breakpoints";

type WindowDimensions = {
    width: number;
    height: number;
};

function getCurrentBreakpoint(width: number) {
    let currBreakpoint = 0;
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

export const useWindowDimensions = (): WindowDimensions => {
    const [dimensions, setDimensions] = useState<WindowDimensions>(
        getWindowDimensions()
    );

    function handleWindowResize() {
        setDimensions(getWindowDimensions());
    }

    const handleResize = debounce(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, 300);

    useLayoutEffect(() => {
        void handleResize();
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
