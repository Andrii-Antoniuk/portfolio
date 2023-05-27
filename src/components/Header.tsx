import "server-only";
import { type FC } from "react";

import Menu from "./Menu";

const Header: FC = () => {
    return (
        <header
            className="flex
            h-16
            justify-between border-b-2
            border-sky-100
            p-4 font-bold"
        >
            <Menu>
                <nav className="flex-wrap items-center justify-evenly gap-4 sm:flex">
                    <div>About me</div>
                    <div>Experience</div>
                    <div>Projects</div>
                    <div>Skills</div>
                    <div>Contact me</div>
                </nav>
            </Menu>
        </header>
    );
};

export default Header;
