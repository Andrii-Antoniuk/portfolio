"use client";

import { SessionProvider } from "next-auth/react";
import { type FC, type PropsWithChildren } from "react";
import OverlayContextProvider from "../context/OverlayContext";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
    if (true) {
        return <OverlayContextProvider>{children}</OverlayContextProvider>;
    }

    return (
        <SessionProvider>
            <OverlayContextProvider>{children}</OverlayContextProvider>
        </SessionProvider>
    );
};

export default RootProvider;
