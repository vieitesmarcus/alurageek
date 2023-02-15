import style from "./Galeria.module.scss";
function Galeria(props) {
  return (
    <div className={style.galeria}>
      <div className={style.galeria__title}>
        <h2>{props.category}</h2>
        <a href="#">Ver tudo &gt;</a>
      </div>
      <div className={style.galeria__products}>
        {props.products.map((element) => (
          <div>
            <img src={element.img} alt={element.nameProduct} />
            <p>{element.nameProduct}</p>
            <p>{element.priceProduct}</p>
            <a href={element.urlProduto}>Ver produto</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
