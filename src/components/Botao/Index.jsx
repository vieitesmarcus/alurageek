import style from "./Botao.module.scss";
export default function Botao(props) {
  return (
    <button
      className={style.botao + " " + (props.cor == "blue" ? style.blue : "")}
    >
      {props.buttonText}
    </button>
  );
}
