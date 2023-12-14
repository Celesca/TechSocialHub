import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Message.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle, faHome, faMessage, faPaperclip, faUser } from '@fortawesome/free-solid-svg-icons'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {
  
  return (
    <>
      <Head>
        <title>Tech Social Hub</title>
        <meta name="description" content="Tech Social Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.chat_header}>
            <div className={styles.chat_profile}>
            <Image src="https://randomuser.me/api/portraits/women/24.jpg" width={80} height={80}></Image>
            <h2>Lovado Rupez</h2>
            <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{fontSize: 18, color:"#3BBA9C", width: 40}}></FontAwesomeIcon>
            </div>
            <FontAwesomeIcon
                        icon={faDotCircle}
                        style={{fontSize: 18, color:"#3BBA9C", width: 40}}></FontAwesomeIcon>
            
        </div>

        <div className={styles.footer}>Copyright &copy; Celesca 2023</div>
        
      </main>
    </>
  )
}
