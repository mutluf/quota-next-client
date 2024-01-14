import CreateButton from "../components/createbutton/CreateButton";
import CreateQuoteModal from "../components/modals/createquotemodal/CreateQuoteModal";
import Quote from "../components/quote/Quote";
import styles from './page.module.css'
export default function Home() {

  return (
    <div className={styles.container} >
        <Quote/>
        <Quote/>
        <Quote/>
        <Quote/>  
        <CreateButton/>
        <CreateQuoteModal/>
    </div>
  )
}
