const up = () => {
  let order = 1;
  const section = "bebidas";

  const products = [
    {
      order: order++,
      units: 2,
      price: 4000,
      name: "limonada caño cristales",
      img: "limonada-cano-cristales.jpg",
      description: "Limonada natural de sandía"
    },
    {
      order: order++,
      units: 2,
      price: 3000,
      name: "limonada magdalena",
      img: "limonada-magdalena.jpg",
      description: "Limonada natural de panela con hierbabuena"
    },
    {
      order: order++,
      units: 2,
      price: 10000,
      name: "mojito amazonas",
      img: "mojito-fresa.jpg",
      description: "Ron blanco, fresa, limón, hierbabuena y azúcar"
    },
    {
      order: order++,
      units: 2,
      price: 10000,
      name: "mojito guatapurí",
      img: "mojito-verde.jpg",
      description: "Ron blanco, limón, hierbabuena y azúcar"
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
