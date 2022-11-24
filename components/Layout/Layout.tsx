import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

import styles from '../../styles/Layout/Layout.module.scss'

interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={styles.layout}>
            <Header />
            <Navbar/>

            <main className={styles.mainGrid}>
                {props.children}
            </main>

            <Footer />
        </div>
    )
}