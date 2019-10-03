const up = () => {
  let order = 1;
  const section = "spring rolls vegetarianos";

  const products = [
    {
      order: order++,
      units: 2,
      price: 8500,
      name: "Tomates secos, queso mozzarella y pesto",
      img: "springs-rolls.jpg",
    },
    {
      order: order++,
      units: 2,
      price: 8500,
      name: "Maíz, cebolla grillé y queso mozzarella",
      img: "springs-rolls.jpg",
    },
    {
      order: order++,
      units: 2,
      price: 8500,
      name: "Bocadillo y queso",
      img: "springs-rolls.jpg",
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
