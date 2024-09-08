import PokémonContainer from "./components/Pokémon-Container";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  const rand = Math.floor(Math.random() * 4);
  let img = "";
  if (rand === 1) {
    img = "exeggcute.jpg";
  } else if (rand === 2) {
    img = "charizard-card.jpg";
  } else if (rand === 3) {
    img = "pikachu.jpg";
  } else {
    img = "raichu-desktop.jpg";
  }

  return (
    <div style={{ backgroundImage: `url(../../${img})` }} id="app-container">
      <Header />
      <div id="pokemon-container-container">
        <PokémonContainer />
        <PokémonContainer />
        <PokémonContainer />
        <PokémonContainer />
        <PokémonContainer />
      </div>
    </div>
  );
}

export default App;
