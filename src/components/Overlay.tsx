"use client";
import { useContext, type FC } from "react";
import { OverlayContext } from "../context/OverlayContext";

const Overlay: FC = () => {
    const { isVisible } = useContext(OverlayContext);

    return isVisible ? (
        <div className="absolute inset-0 z-10 bg-slate-200/50" />
    ) : null;
};

export default Overlay;
