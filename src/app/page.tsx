import CreateButton from "./components/createbutton/CreateButton";
import Quote from "./components/quote/Quote";
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={styles.container} >
        <Quote/>
        <Quote/>
        <Quote/>
        <Quote/>  
        <CreateButton/>
    </div>
  )
}
