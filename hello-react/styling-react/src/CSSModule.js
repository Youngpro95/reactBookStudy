import styles from './CSSModule.module.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles)

const CSSModule=()=>{
  return (
    <div className={cx(`wrapper`,`inverted`)}>
      hello , this is a test <span className='something'>CSS Module</span>
    </div>
  )
}
export default CSSModule;