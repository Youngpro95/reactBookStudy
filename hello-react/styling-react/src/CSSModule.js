import styles from './CSSModule.module.css';
const CSSModule=()=>{
  return (
    <div className={`{$styles.wrapper} ${styles.inverted}`}></div>
      hello , this is a test <span className='something'>CSS Module</span>
    </div>
  )
}
export default CSSModule;