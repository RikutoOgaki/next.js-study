import styles from '@/styles/anime/index.module.css'

export default function Anime(){
return(
<>
    <h1 className={styles.font}>animationについて</h1>
    <div className={styles.wrap}>
        <div className={styles.dice}>
            <div>box1</div>
            <div>box2</div>
            <div>box3</div>
            <div>box4</div>
            <div>box5</div>
            <div>box6</div>
        </div>
    </div>
</>
)
}