import imagenRickMorty from "./img/rick-morty.png"
import './App.css';

import Characters from "./components/Characters";
import { useState } from "react";

function App() {
  
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    const api = await fetch ("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
  }

    console.log (characters);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='tittle'>Rick & morty</h1>
        {characters ?(
          <Characters characters={characters} setCharacters={setCharacters}/>
          ):(
            <>
            <img src={imagenRickMorty} alt ="Rick & Morty" className='img-home'/>
            <button onClick = {reqApi} className="btn-search">
              Buscar Personajes
            </button>
            </>
          )
        }
        
        
        
      </header>
    </div>
  );
}

export default App;
