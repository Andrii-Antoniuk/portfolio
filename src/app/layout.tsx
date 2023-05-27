import { type FC, type PropsWithChildren } from "react";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Overlay from "../components/Overlay";
import RootProvider from "../components/RootProvider";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body className="relative flex min-h-screen flex-col">
                <RootProvider>
                    <Overlay />
                    <Header />
                    {children}
                    <Footer />
                </RootProvider>
            </body>
        </html>
    );
};

export default RootLayout;
