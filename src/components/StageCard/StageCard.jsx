import { NavLink } from "react-router-dom"
import style from "./StageCard.module.scss"

export function StageCard ({ imgSrc, title, text, id }) {
    return (
        <div className={style.newsCard}>
            <img src={imgSrc} />
            <h3>{title}</h3>
            <p>{text}</p>
            <NavLink to={`/news/${id}`}>LÆS MERE</NavLink>
        </div>
    )
}