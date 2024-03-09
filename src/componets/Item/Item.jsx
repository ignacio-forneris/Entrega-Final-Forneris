const Item = ({ name, category, img, price}) => {
    return (
        <article>
            <h3>categoria: {category}</h3>
            <h2>{name}</h2>
            <img src={img} style={{ width: 100}}/>
            <h3>Precio: ${price}</h3>
            <a>ver detalle</a>
        </article>
    )
}

export default Item