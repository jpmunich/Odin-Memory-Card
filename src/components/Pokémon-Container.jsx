import { useState, useEffect } from "react";
import "../styles/pokemon-container.css";
function PokemonContainer() {
  const [selected, setSelected] = useState();
  const [name, setName] = useState();

  const num = Math.floor(Math.random() * 153);
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`)
        .then((result) => result.json())
        .then((data) => {
          setSelected(data.sprites.front_default);
          let name = data.name;
          const firstLetterCap = name.charAt(0).toUpperCase();
          const remainingLetters = name.slice(1);
          const capitalizedWord = firstLetterCap + remainingLetters;
          setName(capitalizedWord);
        });
    }
    return () => (ignore = true);
  }, []);

  return (
    <div>
      <div className="pokemon-card-container">
        <img src={selected} alt="Pokemon" className="pokemon-image" />
        <p>{name}</p>
      </div>
    </div>
  );
}

export default PokemonContainer;
