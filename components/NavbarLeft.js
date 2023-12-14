import styles from '@/styles/NavbarLeft.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMessage, faPaperclip, faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function NavbarLeft() {
    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <Image src='/next.svg' width={100} height={50}></Image>
                <h1>Celesca</h1>
            </div>
            <div className={styles.list_container}>
            <ul>
                <Link href="/">
                <li>
                    <FontAwesomeIcon
                        icon={faHome}
                        style={{fontSize: 18, color:"white", width: 40}}></FontAwesomeIcon>
                    <span style={{marginLeft:10}}>Home</span>
                </li>
                </Link>

                <Link href="/profile">
                <li>
                    
                    <FontAwesomeIcon
                        icon={faUser}
                        style={{fontSize: 18, color:"white", width: 40}}></FontAwesomeIcon>
                    <span style={{marginLeft:10}}>Your Profile</span>
                </li>
                </Link>

                <Link href="/message">
                <li>
                    <FontAwesomeIcon
                        icon={faMessage}
                        style={{fontSize: 18, color:"white", width: 40}}></FontAwesomeIcon>
                    <span style={{marginLeft:10}}>Message</span>
                </li>
                </Link>


                <li>
                    
                    <FontAwesomeIcon
                        icon={faPaperclip}
                        style={{fontSize: 18, color:"white", width: 40}}></FontAwesomeIcon>
                    <span style={{marginLeft:10}}>Posts</span>
                </li>

            </ul>
            <Link href="/profile">
            <div class={styles.user_container}>
                <Image style={{borderRadius:100}} src="https://randomuser.me/api/portraits/women/24.jpg" alt="userpic" width={50} height={50}></Image>
                <p>Apollo Celesca</p>
            </div>
            </Link>
            </div>
            

        </div>
    )
}