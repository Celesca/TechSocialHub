import styles from '@/styles/Layout.module.css'
import NavbarLeft from './NavbarLeft'
import NavbarRight from './NavbarRight'

export default function Layout({children}) {
    return(
        <div className={styles.container}>
            <NavbarLeft/>
            {children}
            <NavbarRight/>
        </div>
    )
}