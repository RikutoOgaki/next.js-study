import styles from '@/styles/anime/index.module.css'

export default function Anime(){
return(
<>
    <h1 className={styles.font}>animationについて</h1>
    <div className={styles.demo}>
        <h2 className={styles.font1}>transitionを使ったアニメーション</h2>
        <p className={styles.ptag}>transition</p>
        <div>
            <div>box</div>
            <div>box</div>
            <div>box</div>
            <div>box</div>
        </div>
    </div>
    <div className={styles.demo2}>
        <h2 className={styles.font1}>@keyframeを使ったアニメーション</h2>
        <p className={styles.ptag}>@keyframe</p>
        <div>
            <div>box</div>
        </div>
    </div>
    <div className={styles.wrap}>
        <h2 className={styles.font1}>animationの応用</h2>
        <p className={styles.ptag}>ずっとくるくると回り続ける3D BOX</p>
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