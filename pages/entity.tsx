import { useRouter } from "next/router";

import styles from '../styles/Entity.module.scss'

export default function Entity() {
  const { query } = useRouter();
  console.log(query)

  return (
    <>
      <header className="">

      </header>

      <main>

      </main>

      <footer>

      </footer>
    </>
  )
}