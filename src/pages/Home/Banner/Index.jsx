import Botao from '../../../components/Botao/Index';
import style from './Banner.module.scss';
import banner from '/src/assets/banner.jpg';
export default function Banner(){
    return(
        <div className={style.banner}>
            <div className={style.banner__promocao}>
                <h1>Dezembro Promocional</h1>
                <p>Produtos selecionados com 33% de desconto</p>
                <Botao cor="blue" buttonText="Ver Console"/>
            </div>
        </div>
    )
}