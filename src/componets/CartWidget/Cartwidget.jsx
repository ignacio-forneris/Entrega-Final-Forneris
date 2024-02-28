import Cart from './assets/bolsita.png'

const Cartwidget = () => {
    return (
        <button  className="btn btn-dark">
            <img src={Cart} alt="cart-widget" height={30} />
            0 
        </button>
    )
}

export default Cartwidget