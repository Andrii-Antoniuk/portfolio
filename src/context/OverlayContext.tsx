"use client";

import {
    type PropsWithChildren,
    createContext,
    useState,
    type FC,
} from "react";
import { noopFn } from "~/utils/common";

export type OverlayContextType = {
    isVisible: boolean;
    toggleVisible: (newState?: boolean) => void;
};

export const OverlayContext = createContext<OverlayContextType>({
    isVisible: false,
    toggleVisible: noopFn,
});

const OverlayContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    function toggleVisible(newState?: boolean) {
        setIsVisible((prev) => newState ?? !prev);
    }

    return (
        <OverlayContext.Provider value={{ isVisible, toggleVisible }}>
            {children}
        </OverlayContext.Provider>
    );
};

export default OverlayContextProvider;

OverlayContext.displayName = "OverlayContext";
