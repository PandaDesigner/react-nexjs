import { formatDate } from "../helpers"
import style from '../styles/Entradas.module.css'

const Entradas = ({entrada}) => {

    const {id, titulo, resumen, picture, published_at} = entrada    
  return (
    <article>
        <div>
        <div>
        <div>
             <h3 className={style.h3header}>{titulo.toUpperCase()}</h3>
             <hr/>
             <p className={style.datetime}>{formatDate(published_at)}</p>
             <p className={style.resumensfont}>{resumen}</p>
        </div>
        </div>
        </div>
    </article>
  )
}

export default Entradas