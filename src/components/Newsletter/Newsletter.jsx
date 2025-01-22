import style from "./Newsletter.module.scss";
import imgfooter from "../../assets/images/hero2.png";
import { IoMailOutline } from "react-icons/io5";

export function Newsletter() {
  return (
    <section className={style.newsletter}>
      <div>
        <h4>TILMELD NYHEDSBREV</h4>
        <IoMailOutline />
        <p>Få de seneste nyheder sendt til din indbakke</p>
        <input></input>
        <button>TILMELD</button>

        {/* <img src={imgfooter} alt="" /> */}
      </div>
    </section>
  );
}
