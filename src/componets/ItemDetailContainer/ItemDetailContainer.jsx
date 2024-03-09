import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        getProductsById('2')
            .then(result => {
                setProduct(result)
            })
    }, [])

    return (
        <main>
            <h1>Detalle del Producto</h1>
            <ItemDetail { ...product}/> 
        </main>
    )
}

export default ItemDetailContainer