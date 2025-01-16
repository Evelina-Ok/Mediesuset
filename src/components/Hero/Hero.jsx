import style from "./Hero.module.scss"

export function Hero ({img}) {
    return (
        <section className={style.hero}>
        <img src={img} alt="" />
        </section>
    );
}