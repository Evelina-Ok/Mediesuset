import { NavLink } from "react-router-dom"
import style from "./NewsCard.module.scss"

export function NewsCard ({ imgSrc, title, text, id }) {
    return (
        <div className={style.newsCard}>
            <img src={imgSrc} />
            <h3>{title}</h3>
            <p>{text.slice(0, 50)}</p>
            <NavLink to={`/news/${id}`}>LÆS MERE</NavLink>
        </div>
    )
}