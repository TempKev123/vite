import { useState } from 'react'
import './App.css'

function App() {
  const [vat, setVat] = useState(0)
  const [disp,setDP] = useState(0)
  const [dis,setDis]= useState(0)
  const [og,setOG]=useState(0)
  const [t,setT]=useState(0)

  function han1(x) { //i give up being smart method
    let d=x.target.value
    setOG(d)
    let r=d-dis
    setDP(r)
    let a=r*0.07
    setVat(a.toFixed(2))
    let b=a+r
    setT(b.toFixed(2))
  }
  function han2(x){ //"i give up being smart" method V.2
    let d=x.target.value
    setDis(d)
    let g = og-d
    setDP(g)
    let a=g*0.07
    setVat(a.toFixed(2))
    let b=a+g
    setT(b.toFixed(2))
    
  }
  return (
    <>
<h1>Kevin's price calculator</h1>
      <p style={{fontSize: '30pt'}}>Price: 
        <input type="number" 
          style={{fontSize: '30pt'}} 
          onChange={han1} />
      </p>
      <p style={{fontSize: '17pt'}}>Discount: 
        <input type="number" 
          style={{fontSize: '30pt'}} 
          onChange={han2} />
      </p>
      <h1>Discounted Price={disp}</h1>
      <h1>VAT = {vat}</h1>
      <h1>Total={t}</h1>
      
    </>
    
  )
}

export default App
