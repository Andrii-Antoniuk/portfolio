"use client";

import { SessionProvider } from "next-auth/react";
import { type FC, type PropsWithChildren } from "react";

const RootProvider: FC<PropsWithChildren> = ({ children }) => {
    if (true) {
        return <>{children}</>;
    }

    return <SessionProvider>{children}</SessionProvider>;
};

export default RootProvider;
