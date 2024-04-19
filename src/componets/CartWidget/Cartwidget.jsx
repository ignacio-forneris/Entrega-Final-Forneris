import { useContext } from 'react'
import { CartContext } from '../../Context/CartContex'
import cart from './assets/bolsita.png'

import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <img src={cart} style={{ width: '30px', height: '30px' }} />
            { totalQuantity }
        </Link>
    )
}

export default CartWidget

