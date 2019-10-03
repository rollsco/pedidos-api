const up = () => {
  let order = 1;
  const section = "bowls";

  const products = [
    {
      order: order++,
      grams: 450,
      price: 19900,
      name: "CHIRIBIQUETE BOWL",
      img: "chiribiquete-bowl.jpg",
      description: "Pollo Crispy, jamón serrano, tomates secos, pimentón, queso mozzarella, aguacate, almendras y lechuga con vinagreta de pesto",
    },
    {
      order: order++,
      grams: 450,
      price: 22900,
      name: "GORGONA BOWL",
      img: "gorgona-bowl.jpg",
      description: "Salmón, palmito osaki con mayo picante y queso crema, arroz de sushi, alga nori, pepino, aguacate, zanahoria y lechuga con Teriyaki",
    },
    {
      order: order++,
      grams: 450,
      price: 16900,
      name: "SUMAPAZ BOWL",
      img: "sumapaz-bowl.jpg",
      description: "Pollo teriyaki, champiñones, papa criolla, zanahoria, maíz, queso mozzarella, pepino, lechuga y guacamole",
    },
    {
      order: order++,
      grams: 450,
      price: 17900,
      name: "QUIMBAYA BOWL",
      img: "quimbaya-bowl.jpg",
      description: "Pollo crispy, tocineta, papa criolla, aguacate, tomate, zanahoria, maíz, pepino y lechuga con vinagreta de Tártara",
    },
    {
      order: order++,
      grams: 450,
      price: 20900,
      name: "TAYRONA BOWL",
      img: "tayrona-bowl.jpg",
      description: "Camarones, fresa, mango, almendras, pimentón, aguacate, maíz, queso mozzarella y lechuga con vinagreta acevichada",
    },
    {
      order: order++,
      grams: 450,
      price: 19900,
      name: "ROSARIO BOWL",
      img: "rosario-bowl.jpg",
      description: "Tilapia y camarones acevichados en leche de tigre, cebolla, mango, pimentón, maíz, zanahoria y lechuga con leche de tigre",
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
