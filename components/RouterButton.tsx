import Link from 'next/link';

import { EntitiesEnum } from '../types/entitiesName.enum';

import styles from '../styles/RouterButton.module.scss';

interface RouterButtonInterface {
    url: string,
    text: string,
    entity: EntitiesEnum,
}

export default function RouterButton(props: RouterButtonInterface) {
    return (
        <Link 
            href={{
                pathname: props.url,
                query: {entityName: props.entity, text: props.text}
            }}
        >
            <div className={styles.routerButton}>
                {props.text}
            </div>
        </Link>
    )
}