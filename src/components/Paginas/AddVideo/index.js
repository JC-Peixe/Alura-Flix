import styles from "./AddVideo.module.css"
export default function AddVideo(){
    return (
        <div className={styles.container}>
            <a className={styles.BotaoAdd} href="/addVideo">Novo Vídeo</a>
        </div>
    )
}