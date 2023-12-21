import HeroesCard from "./HeroesCard";

const HeroesList = [
  {
    id: 0,
    name: "Luffy",
    rarity: "basic",
    attack: 200, 
    defense: 200, 
    hp: 500,
    weaponType: "Devil Fruit User"
  },
  {
    id: 1,
    name: "Nami",
    rarity: "basic",
    attack: 100, 
    defense: 200, 
    hp: 500,
    weaponType: "staff"
  },
  {
    id: 2,
    name: "Zoro",
    rarity: "basic",
    attack: 200, 
    defense: 200, 
    hp: 500,
    weaponType: "sword"
  },
]


function App() {
  return (
    <div>
      <h1>One Piece Heroes</h1>
      {HeroesList.map(h => (
        <HeroesCard heroes={h}/>
      ))}
    </div>
  );
}

export default App;
