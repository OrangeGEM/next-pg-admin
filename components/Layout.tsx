import { ReactNode } from "react";
import { Url } from "url";

import styles from '../styles/Layout.module.scss'
import RouterButton from "./RouterButton";

interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {
    

    return (
        <div className={styles.layout}>
            <header className={styles.header}> </header>
            <nav className={styles.navbar}>
                <RouterButton url="/entity/region_groups" text="Группы регионов" />
                <RouterButton url="/entity/icon_types" text="Типы иконок" />
            </nav>

            <main className={styles.main}>
                {props.children}
            </main>

            <footer className={styles.footer}> </footer>
        </div>
    )
}