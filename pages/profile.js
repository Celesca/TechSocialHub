import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Profile.module.css'
import PostBlock from '@/components/PostBlock'

const inter = Inter({ subsets: ['latin'] })

export default function Profile() {

    const apollo_data = {name: "Apollo Celesca" , 
    date : "11/09/66" , 
    pic: "women/24.jpg",
    blog_picture: "https://cdn.pixabay.com/photo/2019/01/31/20/52/web-3967926_640.jpg"}
  
  return (
    <>
      <Head>
        <title>Tech Social Hub</title>
        <meta name="description" content="Tech Social Hub" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.profile_container}>
          <Image src="https://randomuser.me/api/portraits/women/24.jpg" width={150} height={150}></Image>
        <h1>Apollo Celesca</h1>
        <div className={styles.content_container}>
            <h3>Information</h3>
            <p>Hi! I'm Apollo Celesca and I'm currently working for KMUTT RC Sentinel 
                Also, I am passionate about coding and drinking coffee.
                
            </p>
            <br></br>
            <h3>Skills</h3>
            <p>React, JavaScript, Java Spring Boot, Go</p>
            
        </div>
        </div>

        <h2 className={styles.recent}>Recently Post</h2>

        <PostBlock {...apollo_data}></PostBlock>

        <div className={styles.footer}>Copyright &copy; Celesca 2023</div>
        
      </main>
    </>
  )
}
