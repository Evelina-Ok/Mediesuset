import style from "./NewsContainer.module.scss"

export function NewsContainer ({children}) {
    return (
        <section className={style.newsContainer}>{children}</section>
    );
}