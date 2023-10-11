
import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [data, setData] = useState([])
  const [pokemons, setPokemons] = useState([])
  useEffect(()=>{
    const getData = async()=>{
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
      const datos = await res.json()
      setData(datos.results)
    }
    getData()
  },[])
  
  useEffect(()=>{

  const pokemon = []
    data.map( poke =>{
       fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
      .then(res=>res.json())
      .then(data=>pokemon.push(data))
    })
    setPokemons(pokemon)
  },[data])
  console.log(pokemons);
  return (
    <>
    <Card name={data.name} data={pokemons}></Card>
    </>
  )
}

export default App
