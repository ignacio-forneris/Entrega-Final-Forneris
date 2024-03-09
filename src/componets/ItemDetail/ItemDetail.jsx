import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, img, cetegoey, price, description }) => {
    return (
        <article>
            <img src={img} style={{ width: 100}}/>
            <h2>{name}</h2>
            <h3>categoria: {category}</h3>
            <h3>Precio: ${price}</h3>
            <h3>Descripción{description}</h3>
            <ItemCount stock={stock}/>
        </article>
    )
}

export default ItemDetail
