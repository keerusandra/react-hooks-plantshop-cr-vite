import { useState } from "react";

function PlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      ...formData,
      price: Number(formData.price),
    };

    onAddPlant(newPlant);

    setFormData({ name: "", image: "", price: "" });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="image" value={formData.image} onChange={handleChange} />
      <input name="price" value={formData.price} onChange={handleChange} />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default PlantForm;