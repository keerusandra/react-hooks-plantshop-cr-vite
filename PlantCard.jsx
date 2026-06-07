function PlantCard({ plant, setPlants }) {
  function handleSoldOut() {
    setPlants((prevPlants) =>
      prevPlants.map((p) =>
        p.id === plant.id ? { ...p, soldOut: !p.soldOut } : p
      )
    );
  }

  return (
    <div>
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} />
      <p>{plant.price}</p>

      <button onClick={handleSoldOut}>
        {plant.soldOut ? "Sold Out" : "Available"}
      </button>
    </div>
  );
}

export default PlantCard;
