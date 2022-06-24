import React from "react";

const tiposEle = {
  steel: "Tipo: Acero",
  water: "Tipo: Agua",
  bug: "Tipo: Bicho",
  dragon: "Tipo: Dragón",
  electric: "Tipo: Eléctrico",
  ghost: "Tipo: Fantasma",
  fire: "Tipo: Fuego",
  fairy: "Tipo: Hada",
  ice: "Tipo: Hielo",
  fighting: "Tipo: Lucha",
  normal: "Tipo: Normal",
  grass: "Tipo: Planta",
  psychic: "Tipo: Psíquico",
  rock: "Tipo: Roca",
  dark: "Tipo: Siniestro",
  ground: "Tipo: Tierra",
  poison: "Tipo: Veneno",
  flying: "Tipo: Volador",
}


const Card = ({ pokemon, loading, infoPokemon}) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
      //  console.log(item.moves);
          return (
            <>
              <div
                className={`card tipos tipo ${item.types[0].type.name}`}
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <div className="tipos">
                <h2>{item.name}</h2>
                  {item.types.map((tipo) => {
                    return(
                      <p className="tipo">{tiposEle[tipo.type.name]}</p>
                      )
                  })}
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;