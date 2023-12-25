import Image from "next/image";
import styles from "./page.module.css";
import Paper from '/public/paper.jpg'
export default function Home() {
  return (
    <div>
      <Image className={styles.img} src={Paper} alt="">

      </Image>
    </div>
  )
}
