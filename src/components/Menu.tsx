"use client";
import "client-only";
import { Root, Trigger, Content, Close } from "@radix-ui/react-popover";
import { type FC, type PropsWithChildren, useState, useContext } from "react";
import { OverlayContext } from "../context/OverlayContext";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Menu: FC<PropsWithChildren> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleVisible } = useContext(OverlayContext);

    return (
        <>
            <div className="hidden sm:block">{children}</div>
            <Root
                modal
                open={isOpen}
                onOpenChange={() => {
                    setIsOpen((prevOpen) => !prevOpen);
                    toggleVisible();
                }}
            >
                <h2 className="sm:hidden">Portfolio</h2>
                <Trigger className="sm:hidden select-none transition-transform duration-200 data-[state=open]:rotate-90">
                    <HamburgerMenuIcon />
                </Trigger>
                <Content
                    align="end"
                    className="z-50 flex flex-col gap-2 border bg-white p-4 pe-6"
                >
                    {children}
                    <Close className="absolute end-2 top-2">X</Close>
                </Content>
            </Root>
        </>
    );
};

export default Menu;
