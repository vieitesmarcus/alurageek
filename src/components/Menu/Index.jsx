import style from "./Menu.module.scss";
import Search from "../Search/Index";
import Logo from "../Logo/Index";
import Botao from "../Botao/Index";

export default function Menu() {
  return (
    <div className={style.menu}>
      <Logo />
      <Search />
      <Botao buttonText="Login" cor=""/>
    </div>
  );
}
