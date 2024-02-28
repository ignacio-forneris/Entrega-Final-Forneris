import { useState } from 'react'
import Navbar from "./componets/Navbar/Navbar"
import ItemListConteiner from './componets/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
      <Navbar />
      <ItemListConteiner greetin='Bienvenidos' />   
      </>
  )
}

export default App