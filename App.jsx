import { useEffect, useState } from "react";
import PlantList from "./components/PlantList";
import PlantForm from "./components/PlantForm";
import Search from "./components/Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // FETCH ALL PLANTS ON LOAD
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.log(err));
  }, []);

  // ADD NEW PLANT
  function handleAddPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        setPlants((prev) => [...prev, data]);
      });
  }

  // SEARCH FILTER (keeps all plants when empty)
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <PlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} setPlants={setPlants} />
    </div>
  );
}

export default App;
