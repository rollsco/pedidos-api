const up = () => {
  let order = 1;
  const section = "baos";

  const products = [
    {
      order: order++,
      units: 2,
      price: 13500,
      name: "SIERRA NEVADA",
      img: "sierra-nevada-bao.jpg",
      description: "Panecillo al vapor relleno de tilapia apanada, papa criolla, mayo picante, sriracha, lechuga y cilantro",
    },
    {
      order: order++,
      units: 2,
      price: 15900,
      name: "TOLIMA",
      img: "tolima-bao.jpg",
      description: "Panecillo al vapor relleno de jamón serrano, tomates secos, almendras, queso mozzarella y lechuga",
    },
    {
      order: order++,
      units: 2,
      price: 13900,
      name: "SANTA ISABEL",
      img: "santa-isabel-bao.jpg",
      description: "Panecillo al vapor relleno de salmón fresco, aguacate, zanahoria, queso crema y lechuga",
    },
    {
      order: order++,
      units: 2,
      price: 12500,
      name: "EL RUIZ",
      img: "el-ruiz-bao.jpg",
      description: "Panecillo al vapor relleno de pollo teriyaki, papa criolla, champiñones, guacamole, cebolla grillé y lechuga",
    },
    {
      order: order++,
      units: 2,
      price: 13900,
      name: "COLÓN",
      img: "colon-bao.jpg",
      description: "Panecillo al vapor relleno de camarones acevichados, fresa, aguacate, cebolla grillé y lechuga",
    },
    {
      order: order++,
      units: 2,
      price: 10900,
      name: "GALERAS",
      img: "galeras-bao.jpg",
      description: "Panecillo al vapor relleno de champiñones, mango, zanahoria, quinoa y lechuga",
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
