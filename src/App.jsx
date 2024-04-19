import Navbar from './componets/Navbar/Navbar'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './Context/CartContex'
import { NotificationProvider } from './Notification/NotificationsService'
import CartView from './componets/CartView/CartView'
import Checkout from './componets/Checkout/Checkout'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartView/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App