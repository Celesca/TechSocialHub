import styles from "@/styles/NavbarRight.module.css"
import Image from "next/image"


export default function NavbarRight() {
    return (
        <div className={styles.container}>
            <div className={styles.suggest_container}>
                <h2>Suggested for you</h2>
                <div className={styles.suggest_content}>
                    <Image src="https://cdn.pixabay.com/photo/2023/09/20/06/10/blossoms-8263945_1280.jpg" width={100} height={100} style={{borderRadius: 10}}></Image>
                    <div className={styles.text_content}>
                        <h3 style={{marginTop: "6px"}}>Why life is beautiful</h3>
                        <p>By Andrew Sopihscated</p>
                        <h5>19/06/2023</h5>
                    </div>
                </div>
                <div className={styles.suggest_content}>
                    <Image src="https://cdn.pixabay.com/photo/2023/11/11/19/58/whisky-8381774_1280.jpg" width={100} height={100} style={{borderRadius: 10}}></Image>
                    <div className={styles.text_content}>
                        <h3 style={{marginTop: "6px"}}>Merry Christmas</h3>
                        <p>By Santa Claus</p>
                        <h5>25/12/2022</h5>
                    </div>
                </div>
                <div className={styles.suggest_content}>
                    <Image src="https://cdn.pixabay.com/photo/2023/08/02/18/21/monstera-8165765_640.jpg" width={100} height={100} style={{borderRadius: 10}}></Image>
                    <div className={styles.text_content}>
                        <h3 style={{marginTop: "6px"}}>Arabales</h3>
                        <p>By Kintoki</p>
                        <h5>09/11/2023</h5>
                    </div>
                </div>

            </div>

        </div>
    )
}