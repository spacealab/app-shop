import {Footer} from "./footer";
import {Header} from "./header";
import {ReactNode} from "react";

interface Props {
    children: ReactNode
}

export function Layout({children} : Props) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    )
}