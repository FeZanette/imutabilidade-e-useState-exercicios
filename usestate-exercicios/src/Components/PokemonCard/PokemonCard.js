import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'


// recebendo as props
const PokemonCard = ({ nome, tipo, evolui, peso, cor, imagem, setPokemon, evolucao, evolucao1 }) => {

    const evoluirPokemon = () => {
      setPokemon(evolucao)
      console.log("Cliquei no botão de evoluir")

      if (nome === "Pichu"){
        setPokemon(evolucao)
      }
      else{
        setPokemon(evolucao1)
      }
    }
    
  return (
    <Card color={cor}>
        <img src={imagem} alt={`Pokemon`}/>
        <PokemonName>{nome}</PokemonName>
        <PokemonType>{tipo}</PokemonType>
        <p>{peso}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard