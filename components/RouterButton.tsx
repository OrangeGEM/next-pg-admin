import Link from 'next/link';

import { UrlObject } from 'url';

import styles from '../styles/RouterButton.module.scss';

interface RouterButtonInterface {
    url: string,
    text: string,
}

export default function RouterButton(props: RouterButtonInterface) {
    return (
        <Link 
            href={{
                pathname: props.url,
                query: {entityName: props.text}
            }}
        >
            <div className={styles.routerButton}>
                {props.text}
            </div>
        </Link>
    )
}