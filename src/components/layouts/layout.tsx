import Footer from "./footer/footer";
import Header from "./header/header";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

function Layout({children} : Props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;