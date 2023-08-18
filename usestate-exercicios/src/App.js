import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import PokemonCard from "./Components/PokemonCard/PokemonCard";
import Pikachu from "../src/Img/Pikachu.png";
import Raichu from "../src/Img/Raichu.png";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

function App() {
  // criando o estado pokemon
  const [pokemon, setPokemon] = useState({
    nome: "Pichu",
    tipo: "Electric",
    evolui: false,
    peso: 2,
    cor: "yellow",
    imagem:
      "https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png",
    id: 0,
  });

  const { nome, tipo, evolui, peso, cor, imagem } = pokemon;

  // Para fazer seus próximos pokemons, crie novos estados ultilizando como referência o objeto abaixo:
  /*{
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/archive/f/f3/20130810070434%210172Pichu.png',
    id: 0
  }
  */

  const evolucao = [
    {
      ...pokemon,
      nome: "Pikachu",
      peso: 6,
      imagem: Pikachu,
      id: 1,
    },
    {
      ...pokemon,
      nome: "Raichu",
      peso: 30,
      imagem: Raichu,
      id: 2,
    },
  ];

  
  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard
          nome={nome}
          tipo={tipo}
          evolui={evolui}
          peso={peso}
          cor={cor}
          imagem={imagem}
          setPokemon={setPokemon}
          evolucao={evolucao[0]}
          evolucao1={evolucao[1]}
        />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
