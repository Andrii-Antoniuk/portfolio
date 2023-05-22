"use client";
import "client-only";
import { Root, Trigger, Content, Close, Anchor } from "@radix-ui/react-popover";
import { memo, type FC, type PropsWithChildren } from "react";
import { useBreakpoints } from "../hooks/useBreakpoint";

const MobileMenu: FC<PropsWithChildren> = ({ children }) => {
    const breakpoint = useBreakpoints();

    if (breakpoint !== 0) {
        return <>{children}</>;
    }

    return (
        <nav className="relative flex justify-between">
            <Root modal>
                <h2>Portfolio</h2>
                <Anchor className="absolute end-0 bg-slate-200 bottom-0" />
                <Trigger className="data-[state=open]:text-red-400">|||</Trigger>
                <Content className="w-80 bg-slate-200/30">
                    {children}
                    <Close>X</Close>
                </Content>
            </Root>
        </nav>
    );
};

export default memo(MobileMenu);
