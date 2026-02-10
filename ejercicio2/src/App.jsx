import { useState } from 'react'
import './App.css'
import { Card } from './components/card/card'

const App = () => {
  return (
    <div className="App">
      <Card name="Nayo" price={'32.000'} description="Una lesbiana muy sexy que odia usar calzones, precio negociable" imagen={'https://www.ruufe.com/cdn/shop/files/mayonesa_fruco_180gr_light_salsas.jpg?v=1739811561'} />
      <Card name="Dayan" price={'50.000'} description="Viene con moto incluida, en un mes hasta con apartamento" imagen={'https://images.ctfassets.net/8zlbnewncp6f/10pTFn3tUeO2twl5vejhdj/473374fea41d689ddbc218ffae5ab00c/tvs-raider-125-primer-plano.png?w=600&fm=webp&q=90'}/>
      <Card name="Sary" price={'60.000'} description="sabe programar" imagen={'https://cdn.wikifarmer.com/images/detailed/2024/03/Informacion-sobre-el-arbol-de-la-papaya.png'} />
    </div>
  )
}

export default App
