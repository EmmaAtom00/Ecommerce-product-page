import { useState } from "react"
import Navbar, { RCart } from "./Navbar"
import Section from "./Section"


function App() {
  const [cartElements, setcartElements] = useState([])
  return (
    <>
    <Navbar cartElements={cartElements} setcartElements={setcartElements} />
    {/* <RCart cartElements={cartElements}/> */}
    <Section setcartElements={setcartElements} cartElements={cartElements} />
    </>
  )
}

export default App
