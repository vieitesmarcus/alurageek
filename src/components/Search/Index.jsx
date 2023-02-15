import style from "./Search.module.scss";
import IconeSearch from '/src/assets/img/IconeSearch.svg';
export default function Search() {
  return (
    <form action=""className={style.form}>
      <input
        className={style.search}
        type="text"
        placeholder="O que deseja encontrar?"
      />
      <button type="submit" className={style.botao}>
        <img src={IconeSearch} alt="" className={style.lupa}/>
      </button>{" "}
    </form>
  );
}
