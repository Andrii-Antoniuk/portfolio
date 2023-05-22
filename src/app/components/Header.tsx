import "server-only";
import { type FC } from "react";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("./MobileMenu"), {
    ssr: false,
});

const Header: FC = () => {
    return (
        <header
            className="h-16
            border-b-2
            border-sky-100 p-4
            font-bold"
        >
            <MobileMenu>
                <div>About me</div>
                <div>Experience</div>
                <div>Projects</div>
                <div>Skills</div>
                <div>Contact me</div>
            </MobileMenu>
            <nav className="hidden flex-wrap items-center justify-evenly gap-4 sm:flex">
                <div>About me</div>
                <div>Experience</div>
                <div>Projects</div>
                <div>Skills</div>
                <div>Contact me</div>
            </nav>
        </header>
    );
};

export default Header;
