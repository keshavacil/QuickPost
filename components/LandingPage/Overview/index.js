import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./style.module.css"
import { faComment, faCommentAlt, faComments } from "@fortawesome/free-solid-svg-icons"


const Overview = () => {
    return (
        <div className={styles.Overview}>
            <div className={styles.Top}>
                <div className={styles.Topleft}>

                </div>
                <div className={styles.Topright}>

                </div>
            </div>
            <div className={styles.Bottom}>
                <div className={styles.content}>
                    <FontAwesomeIcon icon={faComment}/>
                    <h4></h4>
                    <p></p>
                </div>
                <div className={styles.content}>
                    <FontAwesomeIcon />
                    <h4></h4>
                    <p></p>
                </div>
                <div className={styles.content}>
                    <FontAwesomeIcon />
                    <h4></h4>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Overview