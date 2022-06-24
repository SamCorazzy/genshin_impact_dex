import React from "react";

const estadisticas = {
    hp: "Vida",
    attack: "Ataque",
    defense: "Defensa",
    "special-attack": "Ataque Especial",
    "special-defense": "Defensa Espacial",
    speed: "Velocidad",
};

const Pokeinfo = ({ data}) => {
    // console.log(data);
    
    return (
        <>
            {!data ? (
                ""
            ) : (
                <>
                    <h1 className={`${data.types[0].type.name}`}>{data.id}.- {data.name}</h1>

                    <div className={`containerMio ${data.types[0].type.name}`}>
                        <div className="row">
                            <div className="col">
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col">
                            <div className="row">
                                <img
                                    className="imgMio"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`}
                                    alt=""
                                />
                                <img
                                    className="imgMio"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                                    alt=""
                                />
                            </div>
                            <div className="row"><img
                                className="imgMio"
                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${data.id}.png`}
                                alt=""
                            />
                                <img
                                    className="imgMio"
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${data.id}.png`}
                                    alt=""
                                />
                            </div>



                            <div className="abilities row">
                                {data.abilities.map((poke) => {
                                    return (
                                        <>
                                            <div className="group">
                                                <h2>{poke.ability.name}</h2>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <div className="base-stat row">
                                {data.stats.map((poke) => {
                                    return (
                                        <>
                                            <h3>
                                                {estadisticas[poke.stat.name]}: {poke.base_stat}
                                            </h3>
                                        </>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col">
                            <p className="tipo">Experiencia Base: {data.base_experience}</p>
                            <p className="tipo">Altura: {data.height}0 cm</p>
                            <p className="tipo">Peso: {data.weight} kg</p>
                            <p>Ataque</p>
                            <p className="tipo">Ataque 1: {data.moves[0].move.name}</p>

                        </div>
                    </div>
                </>
            )}
        </>
    );
};
export default Pokeinfo;