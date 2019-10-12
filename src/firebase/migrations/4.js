const up = () => {
  let order = 1;
  const section = "pokes";

  const products = [
    {
      order: order++,
      grams: 450,
      price: 22900,
      name: "poke salmón",
      img: "poke-salmon.jpg",
      description: "Arroz de sushi, salmón, queso crema y aguacate",
    },
    {
      order: order++,
      grams: 450,
      price: 18900,
      name: "poke camarones",
      img: "poke-camaron.jpg",
      description: "Arroz de sushi, camarones apanados, queso crema y aguacate",
    },
    {
      order: order++,
      grams: 450,
      price: 16900,
      name: "poke pollo crispy",
      img: "poke-pollo.jpg",
      description: "Arroz de sushi, pollo crispy, queso crema y aguacate",
    },
  ];

  products.map(product => {
    firestore
      .collection(`sections/${section}/products`)
      .doc()
      .set(product);
  });
};

up();
