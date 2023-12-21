function HeroesCard(props) {
    return (
        <div className="bg-light border p-4 m-2">
          <h4>{props.heroes.name}</h4>
          <p>{props.heroes.hp}</p>
          <p>{props.heroes.weaponType}</p>
        </div>
    )
}

export default HeroesCard
