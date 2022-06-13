import { useState } from "react";

const tipos ={
  artifacts: "Artefactos",
  boss: "Jefes",
  characters: "Personajes",
  consumables: "Objetos Consumibles",
  domains: "Dominios",
  elements: "Elementos",
  enemies: "Enemigos",
  materials: "Materiales",
  nations: "Naciones",
  weapons: "Armas",
}

function App() {

  const [genshinState, setGenshinState] = useState({
    types: [],
    }
  );


  const fetchGenshinApi = async (item, url="https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respJson = await respuesta.json();

    if(item === "types"){
      setGenshinState({
        ...genshinState,
        types: respJson.types,
      });
    }
    else{
      setGenshinState({
        ...genshinState,
        [item]:respJson,
      });
    }
  };
  
  fetchGenshinApi("types");

  const handleChangeType = ({target}) => {
    const url= `https://api.genshin.dev/${target.value}`;
    fetchGenshinApi(target.value, url);
  }


  return (
    <div className="App card container p-3 mt-4 div" style={{border:"none"}}>
      <h1 className="text-center">Genshin Impact</h1> 
      <select className="div" name="types" onChange={handleChangeType}>
        <option value="">Seleccione una opción</option>
        {genshinState.types.map((type)=>(
        <option key={type} value={type} >
          {tipos[type]}
        </option>
        ))}
      </select>
    </div>
    
  );
}

export default App;
