import { type FC, type PropsWithChildren } from "react";
import Footer from "~/app/components/Footer";
import Header from "~/app/components/Header";
import RootProvider from "./components/RootProvider";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <RootProvider>
                    <Header />
                    {children}
                    <Footer />
                </RootProvider>
            </body>
        </html>
    );
};

export default RootLayout;
