const up = () => {
  let order = 1;
  const section = "menú infaltil : )";

  const products = [
    {
      order: order++,
      grams: 150,
      price: 9900,
      name: "JARDÍN BOWL",
      img: "jardin-mini-bowl.jpg",
      description: "Deditos de pollo, caritas felices de papa, queso, tomate y aguacate",
    },
    {
      order: order++,
      grams: 150,
      price: 8900,
      name: "BELÉN BOWL",
      img: "belen-mini-bowl.jpg",
      description: "Pescado blanco apanado, fresa, mango, queso y aguacate",
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
