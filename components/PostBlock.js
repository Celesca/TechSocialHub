import styles from '@/styles/PostBlock.module.css'
import { faComment, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function PostBlock(props) {
    
    const {name, date, blog_picture} = props
    const picture = `https://randomuser.me/api/portraits/${props.pic}`

    // women/24.jpg

    return (
        <>
            <div className={styles.post_block}>
                <div className={styles.profile}>
                    <Image src={picture} width={100} height={100}></Image>
                    <div>
                        <h3>{name}</h3>
                        <p style={{marginTop: "5px"}}>{date}</p>
                    </div>
                    
                </div>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Image src={blog_picture} width={100} height={100}></Image>

                </div>

                <div className={styles.comment}>
                    <div className={styles.comment_bar}>
                        <div>
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                style={{fontSize: 18, color:"white", width: 20 , height:30, marginRight: '10px'}}>
                            </FontAwesomeIcon>
                            <span>Like</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faComment}
                                style={{fontSize: 18, color:"white", width: 20 , height:30, marginRight: '10px'}}>
                            </FontAwesomeIcon>
                            <span>Comment</span>
                        </div>
                        <div>
                            <FontAwesomeIcon
                                icon={faShare}
                                style={{fontSize: 18, color:"white", width: 20 , height:30, marginRight: '10px'}}>
                            </FontAwesomeIcon>
                            <span>Share</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}