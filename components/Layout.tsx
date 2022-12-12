import { ReactNode } from "react";

import { EntitiesEnum } from "../types/entitiesName.enum"; 

import styles from '../styles/Layout.module.scss'
import RouterButton from "./RouterButton";

interface LayoutProps {
    children: ReactNode
}

export default function Layout(props: LayoutProps) {
    

    return (
        <div className={styles.layout}>
            {/* <header className={styles.header}> </header> */}
            <nav className={styles.navbar}>
                <RouterButton url="/entity" text="Группы регионов" entity={EntitiesEnum.region_groups} />
                <RouterButton url="/entity" text="Типы иконок" entity={EntitiesEnum.icon_types} />
            </nav>

            <main className={styles.main}>
                {props.children}
            </main>

            {/* <footer className={styles.footer}> </footer> */}
        </div>
    )
}